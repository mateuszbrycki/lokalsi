import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux'
import RidesView, {RidesViewActionProps, RideViewProps} from '../components/RidesView'
import {State} from 'store/state'
import {getText} from '../store/selectors'
import {ChangeTextAction} from "../store/actions";

const mapStateToProps: MapStateToProps<RideViewProps, {}, State> = (state: State) => ({
    text: getText(state)
})

const mapDispatchToProps: MapDispatchToProps<RidesViewActionProps, {}> = (dispatch) => ({
    onClick: () => dispatch(ChangeTextAction("New Name"))
})

const RidesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RidesView)

export default RidesContainer
