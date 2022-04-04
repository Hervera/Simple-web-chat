import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from 'react-use-localstorage';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import MessageForm from "./components/MessageForm";
import Messages from "./components/Messages";
import Username from "./components/UsernameForm";
import { addUser, addMessage } from './redux/actionCreators';
import './App.css';

const App = () => {
  const [username, setUsername] = useState("");
  const [messageText, setMessageText] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const messages = useSelector(state => state.message.messages);

  const [chatUsers, setChatUsers] = useLocalStorage('chatUsers',  JSON.stringify(users));
  const lastUsers = JSON.parse(chatUsers);
  const tabUserFound = lastUsers.find(chatUser => chatUser.tabId === sessionStorage.tabID);

  const perPage = 25;
  const [lastObjectPosition, setLastObjectPosition] = useState(5);
  const [savedMessages, setSavedMessages] = useLocalStorage('savedMessages', JSON.stringify(messages));  
  const lastMessages = JSON.parse(savedMessages);
  const [chunkMessages, setChunkMessages] = useState(lastMessages.slice(-perPage));

  const listInnerRef = useRef();
  const messagesEndRef = useRef();
  const scrollToBottom = () => {
    if(!messagesEndRef.current) return;
    messagesEndRef.current.scrollIntoView();
  };

  const messagesLength = lastMessages.length;
  useEffect(() => {
    scrollToBottom();
  }, []);

  const saveNewUser = (e) => {
    e.preventDefault();
    if(username.trim() === "") {
      alert("Username is required");
      return;
    }
    var tabId = sessionStorage.tabID ? 
        sessionStorage.tabID : 
        sessionStorage.tabID = uuidv4();
    const userWithActiveTab = { username: username, tabId: tabId };
    const updatedChatUsers = [...lastUsers, userWithActiveTab];
    setChatUsers(JSON.stringify(updatedChatUsers));
    dispatch(addUser(userWithActiveTab));
    scrollToBottom();
  }

  const onMessageSendHandler = (e) => {
    e.preventDefault();

    if (messageText.trim() === "") {
      alert("Message is required");
      return;
    }
    const tabUserFound = lastUsers.find(chatUser => chatUser.tabId === sessionStorage.tabID);
    const userMessage = tabUserFound ? tabUserFound.username : username;
    sendMessage(userMessage, messageText);
    setMessageText("");
  }

  const formatDateTime = () => {
    const md = new Date();
    const formatedDate = md.getUTCDate() + " " + md.toLocaleString('en-us',{month:'short', year:'numeric'})
    + " " + md.toLocaleTimeString(['en-US'], {hour: '2-digit', minute:'2-digit'});
    return formatedDate;
  }

  const sendMessage = (username, text) => {
    const todaysDate = formatDateTime();
    const newMessage = { id: uuidv4(), username: username, message: text, sentAt: todaysDate };
    const updatedMessages = [...lastMessages, newMessage];
    setSavedMessages(JSON.stringify(updatedMessages));
    setChunkMessages(updatedMessages.slice(-perPage));
    setLastObjectPosition(perPage);
    dispatch(addMessage(newMessage));
    scrollToBottom();
  }

  const onScroll = () => {
    /* Todo
        1. Scroll to the top and show loading text
        2. Show the last n element from the array messages
        3. When the scroll reaches to the top show the next n messages  
        4. Adjust the scroll position to avoid loading repetition
    */
    if (listInnerRef.current) {
        const { scrollTop, scrollHeight, clientHeight} = listInnerRef.current;
        // on scroll to top
        if (scrollTop === 0) {
          if(chunkMessages.length >= lastMessages.length){
              setIsFetching(false);
              return
          }
          setIsFetching(true);
          setTimeout(() => {
              const lastPos = lastObjectPosition + perPage;
              setChunkMessages(lastMessages.slice(-lastPos))
              setLastObjectPosition(lastObjectPosition => lastObjectPosition + perPage);
              listInnerRef.current?.scrollTo(0, 200);
              setIsFetching(false);
          }, 2000);
        }

        // on scroll to bottom
        if (scrollTop + clientHeight === scrollHeight) {
          setChunkMessages(lastMessages.slice(-perPage));
          setLastObjectPosition(perPage);
        }
    }
  };

  
  return (
    <main className="content">
      <div className="container p-0 col-xl-6 offset-xl-3">
        <Header user={tabUserFound}/>
        {tabUserFound && tabUserFound.username ? 
          <div className="card">
            <div className="row g-0">
              <div className="col-12 col-lg-12 col-xl-12">
                <Messages 
                  messages={messagesLength > perPage ? chunkMessages : lastMessages}
                  tabUsername={tabUserFound.username}
                  isFetching={isFetching} 
                  listInnerRef={listInnerRef}
                  messagesEndRef={messagesEndRef}
                  onScroll={onScroll}
                />
                <MessageForm 
                  onMessageSendHandler={onMessageSendHandler} 
                  messageText={messageText} 
                  setMessageText={setMessageText} 
                />
              </div>
            </div>
          </div>
        : 
          <Username saveUsername={saveNewUser} username={username} setUsername={setUsername}/>
        }
      </div>
    </main>
  )
};

export default App;
