import './App.css';
import React from 'react';
import {BrowserRouter, Redirect, Route, withRouter, Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import {initializeApp} from "./redux/appReducer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {Component} from "react";
import {withSuspense} from "./hoc/WithSuspense";
import store from "./redux/reduxStore";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }


  render() {
    if (!this.props.initialized) return <Preloader/>
    return (
      <div className='site-container container'>
        <Header/>
        <NavbarContainer/>
        <div className='rightContent'>
          <Switch>
          <Route exact path='/'
                 render={() => <Redirect to={'login'}/>}/>
          <Route path='/dialogs'
                 render={withSuspense(DialogsContainer)}/>
          <Route path='/profile/:userId?'
                 render={withSuspense(ProfileContainer)}/>
          <Route path='/users'
                 render={() => <UsersContainer/>}/>
          <Route path='/login'
                 render={() => <LoginPage/>}/>
          <Route path='/404'
                 render={() => <div>404 not found</div>}/>
          <Route  path='*'
                 render={() => <Redirect  to='/404' />}/>
          </Switch>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const ReactApp = (props) => {
  // debugger
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
}

export default ReactApp;

