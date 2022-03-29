import React from 'react';

function MessageForm({ onMessageSendHandler, messageText, setMessageText }) {
    return (
        <div className="flex-grow-0 py-3 px-4 border-top">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Type your message" value={messageText} onChange={(e) => setMessageText(e.target.value)}/>
                <button className="btn btn-primary" onClick={onMessageSendHandler}>Send</button>
            </div>
        </div>
    )
}

export default MessageForm;
