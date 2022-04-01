import React from 'react';
import { render } from '@testing-library/react';
import Message from '../Message';

describe('<Message />', () => {

    const currentTabUser = {
        username: 'Hervera', 
        tabUsername: 'Hervera', 
        message:'blah blah', 
        sentAt: 'Today'
    };  

    const otherUser = {
        username: 'Hervera', 
        tabUsername: 'Keza', 
        message:'blah blah', 
        sentAt: 'Today'
    };  

    it('should put the chat message on the right side for the current tab user', () => {
        const { container } = render(<Message {...currentTabUser} />);
        const element = container.querySelector(".chat-message-right");
        expect(element).toBeTruthy();
    });

    it('should put the chat message on the right side for the other users in the chart', async() => {
        const { container } = render(<Message {...otherUser} />);
        const element = container.querySelector(".chat-message-left");
        expect(element).toBeTruthy();
    });
});
