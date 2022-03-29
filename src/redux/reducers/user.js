import {
    SET_USERNAME, GET_USERNAME
} from '../actionTypes';

const initialState = {
    username: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.user
            };

        case GET_USERNAME:
            return {
                ...state,
                username: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;