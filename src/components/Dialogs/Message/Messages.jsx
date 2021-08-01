import React from "react";
import styles from "./messages.module.css";

const Messages = (props) => {
  return (
    <li className={styles.messagesItem}>{props.message}</li>
  )
};

export default Messages;