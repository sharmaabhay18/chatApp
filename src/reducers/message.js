import { ADD_MESSAGE } from '../actions';

const message = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
           id: action.id,
           text: action.text,
           time: action.time,
           author: action.author
             };
    default:
     return state;
  }
};

const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
         if (state.map(mes => mes.id).includes(action.id)) {
            return state;
         }
           return [...state, message(undefined, action)];
   case 'SEND_MESSAGE':
           return [
                  ...state,
                  message(undefined, action)
                ];
    default:
      return state;
  }
};

export default messages;
