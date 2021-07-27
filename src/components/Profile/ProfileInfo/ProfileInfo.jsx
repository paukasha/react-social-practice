import React from 'react';
import styles from "./profileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div className={styles.userProfile}>
      <img className={styles.profileImg} src={profile.photos.large != null ? profile.photos.large : userPhoto} alt='user'/>
      <div className={styles.userProfileInfo}>
        Personal Info
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  )
};

export default ProfileInfo;