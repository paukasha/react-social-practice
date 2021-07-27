import React from 'react';
import styles from './post.module.css';

const Post = (props) => {
  return (
      <li className={styles.allPostItem}>
        <a href='#'>{props.message}</a>
        <span>{props.like}</span>
      </li>

  )
}

export default Post;