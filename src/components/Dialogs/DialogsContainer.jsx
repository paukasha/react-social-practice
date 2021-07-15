import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {


  return <StoreContext.Consumer>
    { (store) => {
      let state = store.getState().dialogPage;

      let onSendMessageClick = () => {
       store.dispatch(sendMessageCreator());
      }

      let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageBodyCreator(body));
      }
      return    <Dialogs updateNewMessageBodyCreator={onNewMessageChange}
                         sendMessage={onSendMessageClick}
                         dialogsPage={state}/>
    }
  }
  </StoreContext.Consumer>

}

export default DialogsContainer;