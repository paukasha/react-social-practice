import React from 'react';
import styles from './users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalItemsCount, pageSize, users, ...props}) => {
  return (
    <div>
      <Paginator currentPage={currentPage}
                 onPageChanged={onPageChanged}
                 totalItemsCount={totalItemsCount}
                 pageSize={pageSize}
      />
      <ul className={styles.user}>
        {users.map(u => <User user={u}
                               key={u.id}
                               followingInProgress={props.followingInProgress}
                               unfollow={props.unfollow}
                               follow={props.follow}/>
          )
        }
      </ul>
    </div>
  )
}

export default Users;