import { addMessage, getMessages } from '../message';

describe('message action creator', () => {

    const newMessage = { 
        id: '7de559d6-06a1-4538-b6c9-29b92041e2cd', username: 'Hervera', message: 'Morning dear', sentAt: '1 Apr 2022 10:59 AM' 
    };

    const messages = [
        newMessage
    ];

    it('should add a message with addMessage function', () => {
      expect(addMessage(newMessage)).toEqual({ type: 'ADD_MESSAGE', message: newMessage });
    });

    it('should get all message with getMessages function', () => {
        expect(getMessages(messages)).toEqual({ type: 'GET_MESSAGES', messages });
    });
});