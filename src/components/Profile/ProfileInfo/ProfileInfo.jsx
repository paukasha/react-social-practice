import React from 'react';
import styles from "./profileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={styles.userProfile}>
      <img className={styles.profileImg} src={props.profile.photos.large} alt='user'/>
      <div className={styles.userProfileInfo}>

        Personal Info
      </div>
    </div>
  )
}

export default ProfileInfo;