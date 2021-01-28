import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {App, AppDispatchProps, AppProps} from "./App";
import {State} from "./store/state";

const mapStateToProps: MapStateToProps<AppProps, { }, State> = () => {
    return {}
}
const mapDispatchToProps: MapDispatchToProps<AppDispatchProps, { }> = () => ({

})

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer