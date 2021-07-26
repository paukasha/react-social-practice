import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {initializeApp} from "./redux/appReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {Component} from "react";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader />

    return (
      <div className='site-container container'>
        <HeaderContainer/>
        <Navbar/>
        <div className='rightContent'>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/profile/:userId?'
                 render={() => <ProfileContainer/>}/>
          <Route path='/users'
                 render={() => <UsersContainer/>}/>
          <Route path='/login'
                 render={() => <LoginPage/>}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

