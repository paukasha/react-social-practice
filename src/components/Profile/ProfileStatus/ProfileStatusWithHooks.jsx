import React, {useEffect, useState} from 'react';
import styles from './profileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div className={styles.status}>
      {!editMode &&
     <span className={styles.statusTitle} onDoubleClick={activateEditMode}>Status: <span className={styles.statusDescr}>{props.status || "-----"}</span></span>}

      {editMode &&
      <input autoFocus={true}
             onBlur={deactivateEditMode}
             onChange={onStatusChange}
             value={status}/>
      }
    </div>
  )
};

export default ProfileStatusWithHooks;