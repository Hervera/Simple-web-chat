import {
    ADD_USER, GET_USERS
} from '../actionTypes';

const initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [ ...state.users, action.user]
            };

        case GET_USERS:
            return {
                ...state,
                users: action.users
            };
        default:
            return state;
    }
};

export default userReducer;