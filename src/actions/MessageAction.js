import firebase from 'firebase';
import {
       START_FETCHING_MESSAGE,
       LAST_FETCHED_MESSAGE,
       UPDATE_MESSAGE_HEIGHT,
       ADD_MESSAGE,
       SEND_MESSAGE
         } from './Var';

export const addMessage = (msg) => {
  return {
    type: ADD_MESSAGE,
     ...msg
  };
};

export const sendMessage = (text, user) => {
   return (dispatch) => {
       const msg = {
                      text,
                      time: Date.now(),
                      author: {
                                name: user.name,
                                avatar: user.avatar
                              }
                    };
       const newMsgRef = firebase.database().ref('message').push();
       msg.id = newMsgRef.key;
       newMsgRef.set(msg);

       dispatch(addMessage(msg));
   };
};

export const startFetchingMessage = () => {
  return {
    type: START_FETCHING_MESSAGE
  };
};

export const lastFetchedMessage = () => {
  return {
    type: LAST_FETCHED_MESSAGE,
    payload: Date.now()
  };
};


export const fetchMessage = () => {
   return (dispatch) => {
       dispatch(startFetchingMessage());

       firebase.database()
               .ref('message')
               .orderByKey()
               .limitToLast(20)
               .on('value', (snapshot) => {
                 setTimeout(() => {
                   const messages = snapshot.val() || [];

                    dispatch(receiveMessages(messages));
                 }, 0);
               });
   };
};

export const receiveMessages = (messages) => {
    return (dispatch) => {
      dispatch(lastFetchedMessage());
    };
};
