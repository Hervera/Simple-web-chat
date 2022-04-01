import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MessageForm from '../MessageForm';

describe('<MessageForm />', () => {

    const props = {
        onMessageSendHandler: jest.fn(), 
        messageText: 'Hello', 
        setMessageText: jest.fn(), 
    };  

    it('should find the message input', async () => {
        const { container } = render(<MessageForm {...props} />);
        const inputEl = container.querySelector(`input[name="message"]`);
        await fireEvent.change(inputEl, {target: { value: "Hi" }});
        expect(inputEl).toBeTruthy();
    });

    it('should be able to send a message', async () => {
        render(<MessageForm {...props} />);
        await fireEvent.submit(screen.getByRole("button", { name: /Send/i }));
        expect(screen.getByText(/Send/i)).toBeInTheDocument();
    });
});
