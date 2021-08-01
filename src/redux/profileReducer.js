import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST',
      SET_USER_PROFILE = 'SET_USER_PROFILE',
      SET_STATUS = 'SET_STATUS',
      DELETE_POST = 'DELETE_POST',
      SAVE_PHOTO_SUCCESS = ' SAVE_PHOTO_SUCCESS';

let initialState = {
  posts: [
    {id: 1, post: 'Hi, how are you?', likesCount: 14},
    {id: 2, post: 'Yo', likesCount: 20},
    {id: 3, post: 'Hello world', likesCount: 120}
  ],
  profile: null,
  status: ''
};

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
      }
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

    case DELETE_POST:
      return {...state, posts: state.posts.filter(p => p.id !== action.postId)}

    case SAVE_PHOTO_SUCCESS:
      return {...state, profile: {...state.profile, photos: action.photos}}

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;