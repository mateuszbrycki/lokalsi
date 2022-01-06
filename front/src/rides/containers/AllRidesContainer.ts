import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux'
import {State} from "../../store/state";
import {getMap, getRides} from '../store/selectors'
import {LoadRidesAction, SetMapStateAction, ShowOnMapAction} from "../store/actions";
import AllRidesView, {AllRidesActionProps, AllRidesProps} from "../components/AllRidesView";
import {MapPoint} from "../../types";

const mapStateToProps: MapStateToProps<AllRidesProps, {}, State> = (state: State) => ({
    rides: getRides(state),
    map: getMap(state)
})

const mapDispatchToProps: MapDispatchToProps<AllRidesActionProps, {}> = (dispatch) => ({
    loadRides: () => dispatch(LoadRidesAction()),
    showOnMap: (startingPoint: MapPoint) => dispatch(ShowOnMapAction(startingPoint)),
    onSetMapState: (mapState: any) => dispatch(SetMapStateAction(mapState))
})

const AllRidesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AllRidesView)

export default AllRidesContainer