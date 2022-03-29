import {
  SET_MESSAGES, GET_MESSAGE, SET_MESSAGE_ERROR, 
} from '../actionTypes/message';


export const setMessages = messages => {
  return  {
      type: SET_MESSAGES,
      messages
  };
};

export function getMessage(message) {
  return {
    type: GET_MESSAGE,
    message,
  };
}


export function setMessageError(messageError) {
  return {
    type: SET_MESSAGE_ERROR,
    messageError,
  };
}
