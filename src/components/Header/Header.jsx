import React from 'react';
import styles from './header.module.css'
import search from '../../search.svg';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        SocialNetwork<br/>logo
      </div>
      <div className={styles.ad}>Your advertisement is here</div>
      <label className={styles.search}>
        <img className={styles.searchImg} src={search} alt="search"/>
        <input type='search'
               placeholder={'Search'}
               className={styles.headerSearch}/>
      </label>
    </header>
  )
};

export default Header;