import React from 'react';
import styles from './profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <img className={styles.profileBackground}
           src="https://content.skyscnr.com/m/1b51182679225810/original/GettyImages-147444574_doc.jpg?resize=1800px:1800px&quality=100"
           alt='background'/>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>
  )
};

export default Profile;