import {
       SET_USER_NAME,
       SET_USER_AVATAR,
       USER_LOGGED_IN,
       USER_NOT_EXIST
       } from '../actions';

const INITIAL_STATE = {
   name: null,
   avatar: null,
   authorized: false
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
     case SET_USER_NAME:
        return { ...state, name: action.payload };
     case SET_USER_AVATAR:
        return { ...state, avatar: action.payload };
    case USER_LOGGED_IN:
        return { ...state, authorized: true };
    case USER_NOT_EXIST:
        return { ...state, authorized: false };
    default:
       return state;
  }
};

export default user;
