import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux'
import {State} from 'store/state'
import {getText} from '../store/selectors'
import {ChangeNameAction} from "../store/actions";
import UserView, {UserViewActionProps, UserViewProps} from "../components/UserView";

const mapStateToProps: MapStateToProps<UserViewProps, {}, State> = (state: State) => ({
    text: getText(state)
})

const mapDispatchToProps: MapDispatchToProps<UserViewActionProps, {}> = (dispatch) => ({
    onClick: () => dispatch(ChangeNameAction("New Name"))
})

const RidesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserView)

export default RidesContainer
