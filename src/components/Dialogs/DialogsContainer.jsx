import {sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,
  }
};

let mapDispatchToProps= (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
     dispatch(sendMessageCreator(newMessageBody));
    },
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect)(Dialogs);