import {
  ADD_MESSAGE, GET_MESSAGES
} from '../actionTypes/message';


export const addMessage = message => {
  return  {
      type: ADD_MESSAGE,
      message
  };
};

export const getMessages = messages => {
  return  {
      type: GET_MESSAGES,
      messages
  };
};
