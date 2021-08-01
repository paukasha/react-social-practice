import React from 'react';
import styles from './post.module.css';
import forPostImage from '../../../../assets/images/forpost.jpg';
import postImageAdded from '../../../../assets/images/postimageadded.jpg';
import like from '../../../../assets/images/like.png';

const Post = (props) => {
  return (
      <li className={styles.allPostItem}>
        <div className={styles.postTop}>
          <img className={styles.postImage} src={forPostImage} alt=""/>
          <div className={styles.postTopText}>
            <span className={styles.postTitleGroup}>Life hack</span>
            <span className={styles.postTimeAppear}>7 minutes ago</span>
          </div>
        </div>
        <div className={styles.postTextAdded}>{props.message}</div>
        <img className={postImageAdded} src={postImageAdded} alt=""/>
        <div className={styles.likes}>
          <img className={styles.likeImage} src={like} alt=""/>
          <div>{props.like}</div></div>
      </li>
  )
};

export default Post;