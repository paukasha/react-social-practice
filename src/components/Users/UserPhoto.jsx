import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';

const UserPhoto = ({user}) => {
  return (
    <NavLink to={'/profile/' + user.id}>
      <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userImg} alt='small'/>
    </NavLink>
  )
}

export default UserPhoto;