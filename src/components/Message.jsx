import React from 'react';

function Message({ username, message, sentAt }) {
    const firstLetterOfUsername = username || '';

    return (
        <div className="chat-message-left pb-4">
            <div>
                <span className="avatar">
                    {firstLetterOfUsername.charAt(0)}
                </span>
                
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                <div className="font-weight-bold mb-1">{username}</div>
                <div>{message}</div>
                <div className="text-muted small text-nowrap mt-2">{sentAt}</div>
            </div>
        </div>
    )
}

export default Message;
