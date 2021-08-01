import React from 'react';
import styles from './formControls.module.css';
import {Field} from "redux-form";

export const TextAreaPosts = ({input, meta: {touched, error}, ...props}) => {
  const hasError = touched && error;
  return (
    <div className={styles.textareaBlock}>
      <textarea className={hasError
        ? styles.textareaPost + ' ' + styles.error : styles.textareaPost}  {...input} {...props} />
      {hasError && <span className={styles.textError}>{error}</span>}
      <button className={styles.addPost}>Add</button>
    </div>
  )
};

export const InputLogin = ({input, meta: {touched, error}, ...props}) => {
  const hasError = touched && error;
  return (
    <div className={styles.login}>
      <input className={hasError ? styles.inputPost + ' ' + styles.error : styles.inputPost}  {...input} {...props}/>
      {hasError && <span className={styles.textError}>{error}</span>}
    </div>
  )
};

// export const Input = ({input, meta: {touched, error}, ...props}) => {
//   const hasError = touched && error;
//   return (
//     <div>
//       <input className={hasError ? styles.inputPost + ' ' + styles.error : styles.inputPost}  {...input} {...props}/>
//       {hasError && <span className={styles.textError}>{error}</span>}
//     </div>
//   )
// };

export const CheckBox = ({input, meta: {touched, error}, ...props}) => {
  const hasError = touched && error;
  return (
    <div className={styles.rememberCheckbox}>
      <input type={'checkbox'}
             className={hasError ? styles.inputCheckbox + ' ' + styles.error : styles.inputCheckBox}  {...input} {...props}/>
      <span>remeber me</span>
      {hasError && <span className={styles.textError}>{error}</span>}
    </div>
  )
};

export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
  return (
    <div>
      <Field placeholder={placeholder}
             name={name}
             component={component}
             validate={validators}
             {...props}
      />{text}
    </div>
  )
};

