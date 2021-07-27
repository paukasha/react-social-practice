import React from 'react';
import styles from './users.module.css';
import UserPhoto from "./UserPhoto";

const User = ({user, followingInProgress, unfollow, follow}) => {
  return (
    <li className={styles.userItem}>
      <div className={styles.userItemLeft}>
        <UserPhoto user={user}/>
        {user.followed
          ? <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                      unfollow(user.id)
                    }}
                    className={styles.userImgBtn}>unFollow</button>
          : <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                      follow(user.id)
                    }}
                    className={styles.userImgBtn}>follow</button>
        }
      </div>
      <div className={styles.userItemRight}>
        <div className={styles.userItemInfo}>
          <span className={styles.fullName}>{user.name}</span>
          <span className={styles.status}>{user.status != null ? user.status : user.status}</span>
        </div>
        <div className={styles.userItemLocation}>{'user.location.country'}<br/>{'user.location.city'}</div>
      </div>
    </li>
  )
}

export default User;