import React from 'react';
import styles from './formControls.module.css';
import {Field} from "redux-form";

export const Input = ({input, meta: {touched, error}, ...props}) => {
  const hasError = touched && error;
  return (
    <div>
      <input className={hasError ? styles.inputPost + ' ' + styles.error : styles.inputPost}  {...input} {...props}/>
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
}

