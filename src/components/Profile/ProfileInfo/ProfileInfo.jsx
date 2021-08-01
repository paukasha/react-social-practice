import React, {useState} from 'react';
import styles from "./profileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  const [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader/>
  }

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  };

  return (
    <div className={styles.userProfile}>
      <div className={styles.userProfileTop}>
        <div className={styles.userProfileImage}>
          <img className={styles.profileImg} src={profile.photos.large || userPhoto} alt='user'/>
          {isOwner && <label className={styles.forInputFile}>
            <span className={styles.inputFileText}>Choose file</span>
            <input accept="image/*" type={'file'} className={styles.userProfileInputFile} onChange={mainPhotoSelected}/>
          </label>}
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
      <div>
        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
          : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
            setEditMode(true)
          }}/>}
      </div>
    </div>
  )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div className={styles.userProfileInfo}>
      <div className={styles.fullName}>
        {profile.fullName}
      </div>
      <div className={styles.contactBlock}>
        <span className={styles.contactTitle}>My skills :</span>
        <span className={styles.contactDescr}>{profile.lookingForAJobDescription}</span>
      </div>
      <div className={styles.contactBlock}>
        <span className={styles.contactTitle}>About me:</span>
        <span className={styles.contactDescr}>{profile.aboutMe}</span>
      </div>
      <div className={styles.contactBlock}><span className={styles.contactTitle}>Contacts:</span>
        {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
      {isOwner && <button onClick={goToEditMode}>Edit</button>}
    </div>
  )
};

export const Contact = ({contactTitle, contactValue}) => {
  return <div>
    {contactValue !== ''
      ? <div className={styles.contactItem}>
        <span className={styles.contactTitleItem}>{contactTitle}:</span>
        <span className={styles.contactDescr}>{contactValue}</span>
      </div>
      : null
    }
  </div>
};

export default ProfileInfo;