import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {App, AppActionsProps, AppProps} from "./App";
import {State} from "./store/state";
import {isUserLoggedIn} from './user/store/selectors'


const mapStateToProps: MapStateToProps<AppProps, { }, State> = (state) => ({
    isUserLoggedIn: isUserLoggedIn(state)
})

const mapDispatchToProps: MapDispatchToProps<AppActionsProps, { }> = () => ({

})

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer