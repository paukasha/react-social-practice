const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
  newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {


  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
     return {
        ...state,
        newMessageBody: action.body,
      };



    case SEND_MESSAGE:
      let body = state.newMessageBody;
     return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: body}]
      };

    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;