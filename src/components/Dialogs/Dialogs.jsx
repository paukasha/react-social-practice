import React from 'react';
import styles from './dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Messages";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(dialog => {
    return <DialogItem name={dialog.name} id={dialog.id}/>
  })

  let messageElements = state.messages.map(message => {
    return <Messages message={message.message}/>
  })

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
   let body = e.target.value;
   props.updateNewMessageBodyCreator(body);
  }

  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogsList}>
        {dialogsElements}
      </ul>
      <div>
        <ul className={styles.messages}>
          {messageElements}
        </ul>
        <div className={styles.newMessageBlock}>
          <textarea className={styles.newMessageText}
                    placeholder="Enter your message"
                    onChange={onNewMessageChange}
                     value={newMessageBody}/>
          <button className={styles.sendNewMessageBtn}
          onClick={ onSendMessageClick }>Send</button>
        </div>
      </div>

    </div>
  )
}

export default Dialogs;