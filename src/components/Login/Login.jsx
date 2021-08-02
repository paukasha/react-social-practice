import React from 'react';
import {reduxForm} from "redux-form";
import {CheckBox, createField, InputLogin} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from './login.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required],  InputLogin)}
      {createField('Password', 'password', [required], InputLogin, {type: 'password'})}
      {createField(null, 'rememberMe', [required], CheckBox, {type: 'checkbox'})}

      {captchaUrl && <img src={captchaUrl} alt='captcha' />}
      {captchaUrl && createField('Symbols from image', 'captcha', [required], InputLogin,{})}

      {error && <div className={styles.formSummaryError}>
        {error}
      </div>}
      <button className={styles.signinBtn}>Sign in</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  });

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div className={styles.login}>
      <h1 className={styles.loginTitle}>Login</h1>
      <div className={styles.testData}>
        <div className={styles.testTitle}>For testing app use:</div>
        <div className={styles.testLogin}>Login:<span className={styles.testLoginText}>for.test.reactapp@mail.ru</span></div>
        <div className={styles.testLogin}>Password:<span className={styles.testLoginText}>freepassword</span></div>
      </div>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  )
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);