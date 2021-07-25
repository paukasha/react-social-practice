import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from './login.module.css';


const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <Field placeholder={'Email'}
               name={'email'}
               component={Input}
        validate={[required]}/>
        <Field placeholder={'Password'}
               type={'password'}
               name={'password'}
               component={Input}
               validate={[required]}/>
        <label>
          <Field type={'checkbox'}
                 name={'rememberMe'}
                 component={Input}
                 validate={[required]}
          />remember me
        </label>
        {props.error && <div className={styles.formSummaryError}>
          {props.error}
        </div>}
        <button>Submit</button>
      </form>

  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  console.log(props)
  const onSubmit = (formData => {
    props.login(formData.email, formData.password, formData.rememberMe)
  })

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);