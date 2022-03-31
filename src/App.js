import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch
  , useSelector 
} from "react-redux";
import useLocalStorage from 'react-use-localstorage';

import Header from "./components/Header";
import MessageForm from "./components/MessageForm";
import Messages from "./components/Messages";
import Username from "./components/UsernameForm";
import { addUser, addMessage } from './redux/actionCreators';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [username, setUsername] = useState("");
  const [messageText, setMessageText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const messages = useSelector(state => state.message.messages);

  const [chatUsers, setChatUsers] = useLocalStorage('chatUsers',  JSON.stringify(users));
  const [savedMessages, setSavedMessages] = useLocalStorage('savedMessages', JSON.stringify(messages));  

  useEffect(() => {
      setIsLoading(false);
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

    const lastUsers = JSON.parse(chatUsers);
    const updatedChatUsers = [...lastUsers, userWithActiveTab];
    setChatUsers(JSON.stringify(updatedChatUsers));

    dispatch(addUser(userWithActiveTab));
  }

  const onMessageSendHandler = (e) => {
    e.preventDefault();

    if (messageText.trim() === "") {
      alert("Message is required");
      return;
    }
    const tabUserFound = allChatUsers.find(chatUser => chatUser.tabId === sessionStorage.tabID);
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

    const lastMessages = JSON.parse(savedMessages);
    const updatedMessages = [...lastMessages, newMessage];
    setSavedMessages(JSON.stringify(updatedMessages));

    dispatch(addMessage(newMessage));
  }

  const allChatUsers = JSON.parse(chatUsers);
  const tabUserFound = allChatUsers.find(chatUser => chatUser.tabId === sessionStorage.tabID);
  
  return (
    <main className="content">
      <div className="container p-0 col-xl-6 offset-xl-3">
        <Header user={tabUserFound}/>
        {tabUserFound && tabUserFound.username ? 
          <div className="card">
            <div className="row g-0">
              <div className="col-12 col-lg-7 col-xl-12">
                <Messages 
                  messages={JSON.parse(savedMessages)}
                  isLoading={isLoading} 
                  tabUsername={tabUserFound.username}
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
