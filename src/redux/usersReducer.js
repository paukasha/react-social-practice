const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: []
    // {
    //   id: 1,
    //   followed: false,
    //   photoUrl: 'https://lh3.googleusercontent.com/proxy/iD1iwyBcNXOa9jN-nYYfcSB0-9QCosiApe_J-nEvaajPa1hs2HmjxIZxxlMsb5jBubRcXQPMenn3gjz2ClsfwsE9i57DhGR2DE8oIIs3GwbfziKxOcXvnB3z9mKAqQyGt0edp5r_KmcM2envCmaPqkrCbfE2olJlLFHRAEJDHuKx6fMSc2j_9sDEwHiB5OpPbPz_80VEjxH0WACWMbye1XH7KkBX9nj7ObzpeAtTTm8xxWA',
    //   fullName: 'Dasha',
    //   status: 'I am a boss',
    //   location: {
    //     city: 'Moscow',
    //     country: 'Russia',
    //   }
    // },
    // {
    //   id: 2,
    //   followed: true,
    //   photoUrl: 'https://lh3.googleusercontent.com/proxy/iD1iwyBcNXOa9jN-nYYfcSB0-9QCosiApe_J-nEvaajPa1hs2HmjxIZxxlMsb5jBubRcXQPMenn3gjz2ClsfwsE9i57DhGR2DE8oIIs3GwbfziKxOcXvnB3z9mKAqQyGt0edp5r_KmcM2envCmaPqkrCbfE2olJlLFHRAEJDHuKx6fMSc2j_9sDEwHiB5OpPbPz_80VEjxH0WACWMbye1XH7KkBX9nj7ObzpeAtTTm8xxWA',
    //   fullName: 'Sasha',
    //   status: 'I am a cool',
    //   location: {
    //     city: 'Kiev',
    //     country: 'Ukraine'
    //   }
    // },
    // {
    //   id: 3,
    //   followed: false,
    //   photoUrl: 'https://lh3.googleusercontent.com/proxy/iD1iwyBcNXOa9jN-nYYfcSB0-9QCosiApe_J-nEvaajPa1hs2HmjxIZxxlMsb5jBubRcXQPMenn3gjz2ClsfwsE9i57DhGR2DE8oIIs3GwbfziKxOcXvnB3z9mKAqQyGt0edp5r_KmcM2envCmaPqkrCbfE2olJlLFHRAEJDHuKx6fMSc2j_9sDEwHiB5OpPbPz_80VEjxH0WACWMbye1XH7KkBX9nj7ObzpeAtTTm8xxWA',
    //   fullName: 'Valera',
    //   status: 'Hello, i am using a whatsapp',
    //   location: {
    //     city: 'Paris',
    //     country: 'France'
    //   }
    // }

  // ]
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }

    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: [
          ...state.users,
          ...action.users
        ]
      }

    default:
      return state;
  }
}


export const followAC = (userId) => ({type: FOLLOW, userId});

export const unFollowAC = (userId) => ({type: UN_FOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;

