import React from 'react';
import styles from './users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component{

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return <div>
      <div>
        <span>1</span>
        <span className={styles.selectedPage}>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
    </div>
      <ul className={styles.user}>
        {
          this.props.users.map(u => <li className={styles.userItem} key={u.id}>
            <div className={styles.userItemLeft}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userImg}/>
              {u.followed
                ? <button onClick={() => {
                  this.props.follow(u.id)
                }} className={styles.userImgBtn}>follow</button>
                : <button onClick={() => {
                  this.props.unfollow(u.id)
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
  }
}

export default Users;