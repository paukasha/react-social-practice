import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import Navbar from "./Navbar";

class NavbarContainer extends React.Component {
  render () {
    return (
      <Navbar {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {logout})(NavbarContainer);