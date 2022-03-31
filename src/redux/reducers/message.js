import {
    ADD_MESSAGE, GET_MESSAGES
} from '../actionTypes';

const initialState = {
    messages: []
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [ ...state.messages, action.message ]
            };
        case GET_MESSAGES:
            return {
                ...state,
                messages: [ ...state.messages, action.messages ]
            };
        default:
            return state;
    }
};

export default messageReducer;