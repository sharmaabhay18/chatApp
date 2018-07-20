import { combineReducers } from 'redux';
import Authentication from './Authentication';
import chatRoom from './chatRoom';
import user from './user';

export default combineReducers({
    Auth: Authentication,
    messageFetching: chatRoom,
    chatUser: user
});
