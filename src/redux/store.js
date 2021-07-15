import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, post: 'Hi, how are you?', likesCount: 14},
        {id: 2, post: 'Yo', likesCount: 20},
        {id: 3, post: 'Hello world', likesCount: 120}
      ],
      newPostText: 'hi'
    },
    dialogPage: {
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
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('state was changed')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  addPost() {
    let newPost = {
      id: 6,
      post: this._state.profilePage.newPostText,
      likesCount: 1
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state)
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.profilePage = dialogsReducer(this._state.dialogPage, action)
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
    this._callSubscriber(this._state)
  }

}

window.store = store;
export default store;