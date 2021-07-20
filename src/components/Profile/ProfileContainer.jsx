import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";



class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return  <Redirect to={'/login'} />;
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let withURLDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(withURLDataContainerComponent);