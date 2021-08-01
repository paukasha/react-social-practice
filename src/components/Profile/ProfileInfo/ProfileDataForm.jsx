import styles from "../../common/FormsControls/formControls.module.css";
import stylesContact from '../ProfileInfo/profileInfo.module.css';
import React from "react";
import {createField, InputLogin} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
  return (
    <form className={styles.editForm} onSubmit={handleSubmit}>
      {error && <div className={styles.textError}>
        {error}
      </div>
      }
      <div>
        <span
          className={stylesContact.contactTitle}>Fullname:</span> {createField('Fullname', 'fullName', [], InputLogin)}
      </div>
      <div>
        <span
          className={stylesContact.contactTitle}>My skills :</span> {createField('Skills', 'lookingForAJobDescription', [], InputLogin)}
      </div>
      <div>
        <span
          className={stylesContact.contactTitle}>About me:</span>{createField('About me', 'aboutMe', [], InputLogin)}
      </div>
      <div><span className={stylesContact.contactTitle}>Contacts:</span>{Object.keys(profile.contacts).map(key => {
        return <div key={key}>
          <span
            className={stylesContact.contactTitle}>{key}:</span> {createField(key, 'contacts.' + key, [], InputLogin)}
        </div>
      })}
      </div>
      <div>
        <button>save</button>
      </div>
    </form>
  )
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;