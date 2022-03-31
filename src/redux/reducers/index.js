import userReducer from './user';
import messageReducer from './message';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    user: userReducer,
    message: messageReducer,
})

const rootReducer = (state, action) => {
    return allReducers(state, action)
}

export default rootReducer;