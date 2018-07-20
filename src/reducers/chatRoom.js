import { combineReducers } from 'redux';
import {
          START_FETCHING_MESSAGE,
          LAST_FETCHED_MESSAGE,
          UPDATE_MESSAGE_HEIGHT
       } from '../actions';
import messages from './message';

const INITIAL_STATE = {
  isFetching: false,
  lastFetched: null,
  height: 0
};

const meta = (state = INITIAL_STATE, action) => {
  switch (action.type) {
     case START_FETCHING_MESSAGE:
       return { ...state, isFetching: true };
    case LAST_FETCHED_MESSAGE:
       return { ...state, isFetching: false, lastFetched: action.payload };
    case UPDATE_MESSAGE_HEIGHT:
       return { ...state, height: action.payload };
     default:
       return state;
  }
};

const chatroom = combineReducers({
                                messages,
                                meta
                                 });
export default chatroom;
