import {createSelector} from 'reselect'
import {State} from "../../store/state";
import {RidesListState, RidesState} from "./state";

const getRidesState = (state: State): RidesState => state.ridesState
const getRidesListState = createSelector(
    getRidesState,
    (state: RidesState) => state.ridesList
)

const getRides = createSelector(
    getRidesListState,
    (state: RidesListState) => state.rides
)

const getMap = createSelector(
    getRidesListState,
    (state: RidesListState) => state.map
)

const getActivePopupId = createSelector(
    getRidesListState,
    (state: RidesListState) => state.activePopupId
)

const getFilterConfig = createSelector(
    getRidesListState,
    (state: RidesListState) => state.filterConfig
)

export {
    getRides,
    getMap,
    getActivePopupId,
    getFilterConfig
}