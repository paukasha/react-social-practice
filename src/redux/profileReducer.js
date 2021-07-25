import {profileAPI, usersAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
      {id: 1, post: 'Hi, how are you?', likesCount: 14},
      {id: 2, post: 'Yo', likesCount: 20},
      {id: 3, post: 'Hello world', likesCount: 120}
    ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        post: action.newPostText,
        likesCount: 1
      }
     return {
        ...state,
        posts: [...state.posts, newPost]
      };
    }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}

export let addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export let getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data))
  })
}

export const setStatus = (status) => ({type: SET_STATUS, status})
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}
export default profileReducer;