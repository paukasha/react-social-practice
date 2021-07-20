import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  }
}



let mapDispatchToProps= (dispatch) => {
  return {
    sendMessage: () => {
     dispatch(sendMessageCreator());
    },

    updateNewMessageBody: (body) => {
     dispatch(updateNewMessageBodyCreator(body));
    }
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect)(Dialogs);