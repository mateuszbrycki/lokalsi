import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux'
import {State} from 'store/state'
import AuthorizationView, {AuthorizationViewActionProps, AuthorizationViewProps} from "../components/AuthorizationView";
import {LoginAction, RegisterAction} from "../store/actions";

const mapStateToProps: MapStateToProps<AuthorizationViewProps, {}, State> = () => ({})

const mapDispatchToProps: MapDispatchToProps<AuthorizationViewActionProps, {}> = (dispatch) => ({
    onLogin: (email: string, password: string) => dispatch(LoginAction(email, password)),
    onRegister: (email: string, password: string, repeatPassword: string) => dispatch(RegisterAction(email, password, repeatPassword)),

})

const AuthorizationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorizationView)

export default AuthorizationContainer
