import {
    SET_MESSAGES, GET_MESSAGE, SET_MESSAGE_ERROR
} from '../actionTypes';

const initialState = {
    messages: [],
    messageData: null,
    messageError: null,
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            };

        case GET_MESSAGE:
            return {
                ...state,
                messageData: action.payload
            };

        case SET_MESSAGE_ERROR:
            return {
                ...state,
                messageError: action.payload
            };
        default:
            return state;
    }
};

export default messageReducer;