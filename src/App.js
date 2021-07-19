import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {

  return (
      <div className='site-container container'>
        <Header />
        <Navbar />
        <div className='rightContent'>
          <Route path='/dialogs' render={ () => <DialogsContainer />} />
          <Route path='/profile'
                 render={ () => <ProfileContainer />} />
          <Route path='/users'
                 render={ () => <UsersContainer />} />
        </div>
      </div>
  );
}

export default App;
