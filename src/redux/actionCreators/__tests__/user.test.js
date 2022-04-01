import { addUser, getUsers } from '../user';

describe('user action creator', () => {

    const newUser = { username: 'Keza', tabId: '216736ea-40a7-4ed4-9f39-b68a147b306d' };

    const users = [
        newUser
    ];
    it('should add a user with addUser function', () => {
      expect(addUser(newUser)).toEqual({ type: 'ADD_USER', user: newUser });
    });

    it('should get all user with getUsers function', () => {
        expect(getUsers(users)).toEqual({ type: 'GET_USERS', users });
    });
});