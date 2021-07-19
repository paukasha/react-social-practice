import React from 'react';
import styles from './myPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => {
    return <Post message={post.post} like={post.likesCount}/>
  })

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // let action = updateNewpostTextActionCreator(text);
    // props.dispatch(action);
  }

  return (
    <div className={styles.posts}>
      <span className={styles.postsText}>My posts</span>
      <div className={styles.newPost}>
        <input className={styles.inputPost}
               onChange={onPostChange}
               ref={newPostElement}
               value={props.newPostText}
        />
        <button className={styles.addPost} onClick={onAddPost}>Add</button>
      </div>
      <ul className={styles.allPost}>
        {postsElements}
      </ul>
    </div>
  )
}

export default MyPosts;
