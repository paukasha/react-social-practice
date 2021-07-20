import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;