import React from 'react';
import {addPostActionCreator, updateNewpostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";



let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },

   updateNewPostText: (text) => {
      let action = updateNewpostTextActionCreator(text);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
