import React from 'react';
import styles from "./dialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <li className={styles.dialogsItem}>
      <NavLink to={path} activeClassName={styles.activeLink}>{props.name}</NavLink>
    </li>
  )
};

export default DialogItem;