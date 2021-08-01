import React from 'react';
import styles from './dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Messages";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {InputLogin} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
  let state = props.dialogPage;
  let dialogsElements = state.dialogs.map(dialog => {
    return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
  });

  let messageElements = state.messages.map(message => {
    return <Messages key={message.id} message={message.message}/>
  });

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  };

  if (!props.isAuth) return <Redirect to={'/login'}/>

  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogsList}>
        {dialogsElements}
      </ul>
      <div className={styles.messagesBlock}>
        <ul className={styles.messages}>
          {messageElements}
        </ul>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.newMessageBlock}>
      <Field component={InputLogin}
             validate={[required, maxLength50]}
             name="newMessageBody"
             placeholder="Enter your message"/>
      <button className={styles.sendNewMessageBtn}>Send
      </button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;