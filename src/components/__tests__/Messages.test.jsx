import React from 'react';
import { render, screen } from '@testing-library/react';
import Messages from '../Messages';

describe('<Messages />', () => {

    const props = {
        messages: [
            {id: '8f0404bb-6b17-4a90-af12-3f3845bc1f40', username: 'Hervera', message: 'Hello', sentAt: '31 Mar 2022 10:24 PM'},
            {id: '029f2c76-8d9d-4839-b265-b4fd92ab2efc', username: 'Hervera', message: 'Hi here', sentAt: '31 Mar 2022 10:24 PM'},
            {id: '3a3a3a47-8349-40e6-9205-d297e0ac76c5', username: 'Keza', message: 'Hi Hervera', sentAt: '31 Mar 2022 10:24 PM'}
        ], 
        isLoading: false, 
        tabUsername: 'Hervera', 
    };  

    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    it('should load the messages', () => {
        render(<Messages {...props} />);
        expect(screen.getByText(/Hi here/i)).toBeInTheDocument();
    });
});