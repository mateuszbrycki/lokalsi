import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux'
import {State} from "../../store/state";
import {getActivePopupId, getFilterConfig, getMap, getRides} from '../store/selectors'
import {LoadRidesAction, RidesFilterUpdatedAction, SetMapStateAction, ShowOnMapAction} from "../store/actions";
import AllRidesView, {AllRidesActionProps, AllRidesProps} from "../components/AllRidesView";
import {FilterQuery, MapPoint} from "../../types";

const mapStateToProps: MapStateToProps<AllRidesProps, {}, State> = (state: State) => ({
    rides: getRides(state),
    map: getMap(state),
    activePopupId: getActivePopupId(state),
    filterConfig: getFilterConfig(state)
})

const mapDispatchToProps: MapDispatchToProps<AllRidesActionProps, {}> = (dispatch) => ({
    loadRides: () => dispatch(LoadRidesAction()),
    showOnMap: (id: string, startingPoint: MapPoint) => dispatch(ShowOnMapAction(id, startingPoint)),
    onSetMapState: (mapState: any) => dispatch(SetMapStateAction(mapState)),
    onFiltersUpdated: (query: FilterQuery) => dispatch(RidesFilterUpdatedAction(query.rideTypes, query.cities, query.times, query.days))
})

const AllRidesContainer = connect(
mapStateToProps,
    mapDispatchToProps
)(AllRidesView)

export default AllRidesContainer