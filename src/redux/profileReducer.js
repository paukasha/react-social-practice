const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
      {id: 1, post: 'Hi, how are you?', likesCount: 14},
      {id: 2, post: 'Yo', likesCount: 20},
      {id: 3, post: 'Hello world', likesCount: 120}
    ],
    newPostText: 'hi',
  profile: null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        post: state.newPostText,
        likesCount: 1
      }
     return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };

    }

    case UPDATE_NEW_POST_TEXT: {
   return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile}
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

export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export default profileReducer;