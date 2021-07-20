import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = () => {

  return (
      <div className='site-container container'>
        <HeaderContainer />
        <Navbar />
        <div className='rightContent'>
          <Route path='/dialogs' render={ () => <DialogsContainer />} />
          <Route path='/profile/:userId?'
                 render={ () => <ProfileContainer />} />
          <Route path='/users'
                 render={ () => <UsersContainer />} />
          <Route path='/login'
                 render={ () => <LoginPage />} />
        </div>
      </div>
  );
}

export default App;
