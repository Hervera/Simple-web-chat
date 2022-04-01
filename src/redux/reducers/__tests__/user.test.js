import userReducer from '../user';
import {ADD_USER, GET_USERS } from '../../actionTypes';


describe('Testing users reducers', () => {

    const initialState = {
        users: [],
    };

    const newUser = {
        username: 'Keza', tabId: '216736ea-40a7-4ed4-9f39-b68a147b306d'
    }
  
    test('returns the initial state', () => {
        expect(userReducer(initialState, {})).toEqual(initialState);
    });

    test('return a new user on ADD_USER type', () => {
        const action = { type: ADD_USER, user: newUser };
        expect(userReducer({ users: [] }, action)).toEqual({ users: [ newUser ]});
    });

    test('returns users on GET_USERS type', () => {
        const action = { type: GET_USERS, users: [newUser] };
        expect(userReducer({ users: [newUser]}, action)).toEqual({ users: [ newUser ]});
    });
});
