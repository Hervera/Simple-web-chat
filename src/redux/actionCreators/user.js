import {
    GET_USERNAME,
    SET_USERNAME,
    SET_USER_ERROR,
} from '../actionTypes';


export const setUsername = username => {
    return  {
        type: SET_USERNAME,
        username
    };
};


export function getUsername(username) {
    return {
      type: GET_USERNAME,
      username,
    };
}

export function setUserError(userError) {
    return {
      type: SET_USER_ERROR,
      payload: userError,
    };
}





