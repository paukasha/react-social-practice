import React from 'react';
import {connect} from 'react-redux';
import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from "../../redux/usersSelector";


class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  };

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.getUsers(pageNumber, pageSize);
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalItemsCount={this.props.totalItemsCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             followingInProgress={this.props.followingInProgress}
      />
    </>
  }
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: getPageSize(state),
    totalItemsCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
};

export default compose(
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers})
)(UsersContainer);
