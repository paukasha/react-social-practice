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
                   >unFollow</button>
          : <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                      follow(user.id)
                    }}
                   >follow</button>}
      </div>
      <div className={styles.userItemRight}>
        <div className={styles.userItemInfo}>
          <span className={styles.fullName}>{user.name}</span>
          <span className={styles.status}>{user.status != null ? user.status : 'Hello there i am using whatsapp :)'}
          </span>
        </div>
      </div>
    </li>
  )
}

export default User;