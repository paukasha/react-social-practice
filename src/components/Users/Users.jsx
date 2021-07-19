import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      {pages.map(p => {
        return <button className={props.currentPage === p && styles.selectedPage}
                       onClick={(e) => {
                         props.onPageChanged(p)
                       }}>
          {p}
        </button>
      })}

      <ul className={styles.user}>
        {
          props.users.map(u => <li className={styles.userItem} key={u.id}>
            <div className={styles.userItemLeft}>
              <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userImg}/>
              </NavLink>
              {u.followed
                ? <button onClick={() => {
                  props.follow(u.id)
                }} className={styles.userImgBtn}>follow</button>
                : <button onClick={() => {
                  props.unfollow(u.id)
                }} className={styles.userImgBtn}>unFollow</button>
              }
            </div>
            <div className={styles.userItemRight}>
              <div className={styles.userItemInfo}>
                <span className={styles.fullName}>{u.name}</span>
                <span className={styles.status}>{u.status != null ? u.status : 'Hello, i am using a whatsapp'}</span>
              </div>
              <div className={styles.userItemLocation}>{'u.location.country'}<br/>{'u.location.city'}</div>
            </div>
          </li>)
        }
      </ul>
    </div>
  )
}

export default Users;