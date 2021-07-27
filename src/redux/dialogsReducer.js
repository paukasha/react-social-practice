const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  messages: [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Hello world'}
  ],
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Andrey'},
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: body}]
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;