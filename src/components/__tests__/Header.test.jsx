import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('<Header />', () => {

    const props = {
        user: {
            username: 'Hervera',
        },
    };  

    it('should tell a user to add a name if is not registered yet', () => {
        render(<Header />);
        expect(screen.getByText(/Add your name to start chatting/i)).toBeInTheDocument();
    });

    it('should find text messages when the user is registerd', () => {
      render(<Header {...props} />);
      expect(screen.getByText(/Messages/i)).toBeInTheDocument();
    });
});
