// пример компоненты, изменено на классовый компонент Users.jsx


// import React from 'react';
// import styles from './users.module.css';
// import axios from 'axios';
// import userPhoto from '../../assets/images/user.png';
//
// const Users = (props) => {
// let getUsers = () => {
//   if (props.users.length === 0) {
//     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//       // debugger
//       //   console.log(response.data.items);
//       props.setUsers(response.data.items)
//     })
//   }
// }
//
//
//   return <ul className={styles.user}>
//     <button onClick={() => {getUsers()}}>Get users</button>
//     {
//       props.users.map(u => <li className={styles.userItem} key={u.id}>
//         <div className={styles.userItemLeft}>
//           <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userImg}/>
//           {u.followed
//             ? <button onClick={() => {
//               props.follow(u.id)
//             }} className={styles.userImgBtn}>follow</button>
//             : <button onClick={() => {
//               props.unfollow(u.id)
//             }} className={styles.userImgBtn}>unFollow</button>
//           }
//         </div>
//         <div className={styles.userItemRight}>
//           <div className={styles.userItemInfo}>
//             <span className={styles.fullName}>{u.name}</span>
//             <span className={styles.status}>{u.status != null ? u.status : 'Hello, i am using a whatsapp'}</span>
//           </div>
//           <div className={styles.userItemLocation}>{'u.location.country'}<br/>{'u.location.city'}</div>
//         </div>
//       </li>)
//     }
//   </ul>
// }
//
// export default Users;