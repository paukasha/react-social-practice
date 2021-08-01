import React from 'react';
import styles from './myPosts.module.css';
import Post from "./Post/Post";
import {reduxForm} from "redux-form";
import {createField, TextAreaPosts} from "../../common/FormsControls/FormsControls";

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}
          className={styles.newPost}>
      {createField('Post text', 'newPostText', [], TextAreaPosts, {type: 'text'})}
    </form>
  )
};

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = React.memo(props => {
  let postsElements = [...props.posts].reverse().map(post => {
    return <Post key={post.id} message={post.post} like={post.likesCount}/>
  });

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={styles.posts}>
      <span className={styles.postsText}>My posts</span>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <ul>
        {postsElements}
      </ul>
    </div>
  )
});

export default MyPosts;
