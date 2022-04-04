import React from 'react';

import Message from "./Message";


const Messages = ({ messages, tabUsername, isFetching, listInnerRef, messagesEndRef, onScroll }) => {
    const messagesLength = messages.length;
    return (
        <div className="position-relative">
            <div className="chat-messages p-4"
                onScroll={onScroll}
                ref={listInnerRef}
            >
                {isFetching && (<h5 className="loading text-center my-3">Loading ...</h5>)}
                {messages.map(message => 
                    <Message 
                        key={message.id} 
                        username={message.username} 
                        message={message.message} 
                        sentAt={message.sentAt} 
                        tabUsername={tabUsername}
                    />
                )}
                <div ref={messagesEndRef} style={{ marginTop: messagesLength > 5 ? '60px' : '0px' }}/>
            </div>
        </div>
    )
}

export default Messages;
