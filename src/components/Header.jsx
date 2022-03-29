import React from 'react';

function Header({ user }) {
    const localUsername = user && user.username;
    return (
        <>
            <h1 className="text-center">{!localUsername && 'Welcome to '} Simple Chat App</h1>
            <h1 className={`h3 mb-3 ${!localUsername && 'text-center'} `}>{localUsername ? 'Messages' : 'Add your name to start chatting'}</h1>
        </>
        
    )
}

export default Header;
