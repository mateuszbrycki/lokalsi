import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux'
import {State} from 'store/state'
import {getText} from '../store/selectors'
import {ChangeNameAction} from "../store/actions";
import UserView, {ProfileViewActionProps, ProfileViewProps} from "../components/ProfileView";

const mapStateToProps: MapStateToProps<ProfileViewProps, {}, State> = (state: State) => ({
    text: getText(state)
})

const mapDispatchToProps: MapDispatchToProps<ProfileViewActionProps, {}> = (dispatch) => ({
    onClick: () => dispatch(ChangeNameAction("New Name"))
})

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserView)

export default ProfileContainer
