import React from 'react';
import styles from './myPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";

let maxlength50 = maxLengthCreator(50);


let AddNewPostForm = (props) => {
  // debugger
  return (
    <form onSubmit={props.handleSubmit}
          className={styles.newPost}>
      <Field name='newPostText'
             component={Input}
             placeholder='Post message'
             validate={[required, maxlength50]}
            />
      <button className={styles.addPost}>Add</button>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = React.memo(props => {

  let postsElements = [...props.posts].reverse().map(post => {
    return <Post message={post.post} like={post.likesCount}/>
  })

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={styles.posts}>
      <span className={styles.postsText}>My posts</span>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <ul className={styles.allPost}>
        {postsElements}
      </ul>
    </div>
  )
});


export default MyPosts;
