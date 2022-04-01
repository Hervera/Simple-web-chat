import React from 'react';
import { render, queryByAttribute, screen, fireEvent } from '@testing-library/react';
import UsernameForm from '../UsernameForm';

const getById = queryByAttribute.bind(null, 'id');
describe('<UsernameForm />', () => {

    const props = {
        saveUsername: jest.fn(), 
        username: 'Hervera', 
        setUsername: jest.fn(), 
    };  

    it('should find the username input', async () => {
        const dom = render(<UsernameForm {...props} />);
        const inputEl = getById(dom.container, 'username');
        await fireEvent.change(inputEl, {target: { value: 'Herve' }});
        expect(inputEl).toBeTruthy();
    });

    it('should be able to save the name of a user', async () => {
        render(<UsernameForm {...props} />);
        await fireEvent.submit(screen.getByRole("button", { name: /Save/i }));
        expect(screen.getByText(/Save/i)).toBeInTheDocument();
    });
});
