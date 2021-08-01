import React from 'react';
import styles from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.loginBlock}>
        {props.isAuth
          ? <div>{props.login} <button className={styles.isAuthBtn} onClick={props.logout}>Logout</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to='/profile' className={styles.navLink} activeClassName={styles.activeLink}>Profile</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to='/dialogs' className={styles.navLink} activeClassName={styles.activeLink}>Messages</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to='/news' className={styles.navLink + ' ' + styles.disabledLink} activeClassName={styles.activeLink}>News</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to='/music' className={styles.navLink + ' ' + styles.disabledLink} activeClassName={styles.activeLink}>Music</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to='/settings' className={styles.navLink + ' ' + styles.disabledLink} activeClassName={styles.activeLink}>Settings</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to='/users' className={styles.navLink} activeClassName={styles.activeLink}>Users</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;