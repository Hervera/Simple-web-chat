import React from 'react';

import Message from "./Message";
import { useScrollToBottom } from "../hooks";

const Messages = ({ messages, isLoading, tabUsername }) => {
    const messagesEndRef = useScrollToBottom(messages);
  
    return (
        <div className="position-relative">
            <div className="chat-messages p-4">
                {isLoading && (<h5 className="loading text-center my-3">Loading ...</h5>)}
                {messages.map(message => 
                    <Message 
                        key={message.id} 
                        username={message.username} 
                        message={message.message} 
                        sentAt={message.sentAt} 
                        tabUsername={tabUsername}
                    />
                )}
                <div ref={messagesEndRef} />
            </div>
        </div>
    )
}

export default Messages;
