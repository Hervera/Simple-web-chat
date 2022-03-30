import React from 'react';
import Message from "./Message";


const Messages = ({ messages, isLoading, tabUsername }) => {
    return (
        <div className="position-relative">
            {isLoading ? (<h5 className="loading  text-center my-3">Loading ...</h5>) : (
                <div className="chat-messages p-4">
                    {messages.map(message => 
                        <Message 
                            key={message.id} 
                            username={message.username} 
                            message={message.message} 
                            sentAt={message.sentAt} 
                            tabUsername={tabUsername}
                        />
                    )}
                </div>
            )}
        </div>
    )
}

export default Messages;
