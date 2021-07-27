import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {initializeApp} from "./redux/appReducer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {Component} from "react";
import {withSuspense} from "./hoc/WithSuspense";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./redux/reduxStore";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader/>
    return (
      <div className='site-container container'>
        <HeaderContainer/>
        <Navbar/>
        <div className='rightContent'>
          <Route path='/dialogs'
                 render={withSuspense(DialogsContainer)}/>
          <Route path='/profile/:userId?'
                 render={withSuspense(ProfileContainer)}/>
          <Route path='/users'
                 render={() => <UsersContainer/>}/>
          <Route path='/login'
                 render={() => <LoginPage/>}/>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const ReactApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default ReactApp;

