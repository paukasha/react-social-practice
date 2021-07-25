import React from 'react';
import styles from './formControls.module.css';


export const Input = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <input className={hasError ?  styles.inputPost + ' ' + styles.error : styles.inputPost}  {...input} {...props}/>
      {hasError && <span className={styles.textError}>{meta.error}</span>}
    </div>
  )
}