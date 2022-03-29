import userReducer from './user';
import messageReducer from './message';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

const allReducers = combineReducers({
    user: userReducer,
    message: messageReducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'SET_USERNAME') {
        storage.removeItem('persist:root') // clean storage in redux persist
        localStorage.removeItem("username");
        state = undefined; // initialize the store
    }
  
    return allReducers(state, action)
}

export default rootReducer;