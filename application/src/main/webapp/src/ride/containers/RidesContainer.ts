import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux'
import RidesView, {RidesViewActionProps, RideViewProps} from '../components/RidesView'
import {State} from 'store/state'
import {getRides} from '../store/selectors'
import {LoadRidesAction} from "../store/actions";

const mapStateToProps: MapStateToProps<RideViewProps, {}, State> = (state: State) => ({
    rides: getRides(state)
})

const mapDispatchToProps: MapDispatchToProps<RidesViewActionProps, {}> = (dispatch) => ({
    loadRides: () => dispatch(LoadRidesAction())
})

const RidesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RidesView)

export default RidesContainer
