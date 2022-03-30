import React from 'react';

function Message({ username, tabUsername, message, sentAt }) {
    const firstLetterOfUsername = username || '';
    const isTabUser = username === tabUsername;
    return (
        <div className={isTabUser ? 'chat-message-right mb-4' : 'chat-message-left pb-4'}>
            <div>
                <span className={`avatar ${isTabUser ? 'dark-blue' : 'white-black'}`}>
                    {firstLetterOfUsername.charAt(0)}
                </span>
            </div>
            <div className={isTabUser ? 'mr-2' : 'ml-2'}>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3">
                    <div className="font-weight-bold mb-1 size-14">{username}</div>
                    <p className="m-0 py-0 size-14">{message}</p>
                </div>
                <div className="text-muted small text-nowrap mt-1">{sentAt}</div>
            </div>
        </div>
    )
}

export default Message;
