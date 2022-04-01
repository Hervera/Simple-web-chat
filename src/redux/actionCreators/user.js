import {
    ADD_USER,
    GET_USERS
} from '../actionTypes';


export const addUser = user => {
    return  {
        type: ADD_USER,
        user
    };
};


export const getUsers = (users) => {
    return {
      type: GET_USERS,
      users,
    };
}
