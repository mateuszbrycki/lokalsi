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

export {
    getRides,
    getMap
}