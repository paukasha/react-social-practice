const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

let initialState = {
    posts: [
      {id: 1, post: 'Hi, how are you?', likesCount: 14},
      {id: 2, post: 'Yo', likesCount: 20},
      {id: 3, post: 'Hello world', likesCount: 120}
    ],
    newPostText: 'hi'
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        post: state.newPostText,
        likesCount: 1
      }
      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export let addPostActionCreator = () => ({type: ADD_POST});

export let updateNewpostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}
export default profileReducer;