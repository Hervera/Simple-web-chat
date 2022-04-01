import messageReducer from '../message';
import {ADD_MESSAGE, GET_MESSAGES } from '../../actionTypes';


describe('Testing messages reducers', () => {

    const initialState = {
        messages: [],
    };

    const newMessage = { 
        id: '7de559d6-06a1-4538-b6c9-29b92041e2cd', username: 'Hervera', message: 'Morning dear', sentAt: '1 Apr 2022 10:59 AM' 
    };
  
    test('returns the initial state', () => {
        expect(messageReducer(initialState, {})).toEqual(initialState);
    });

    test('return a new message on ADD_MESSAGE type', () => {
        const action = { type: ADD_MESSAGE, message: newMessage };
        expect(messageReducer({ messages: [] }, action)).toEqual({ messages: [ newMessage ]});
    });

    test('returns messages on GET_MESSAGES type', () => {
        const action = { type: GET_MESSAGES, messages: [newMessage] };
        expect(messageReducer({ messages: [newMessage]}, action)).toEqual({ messages: [ newMessage ]});
    });
});
