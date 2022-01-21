import {Map, Ride, RideId} from "../../types";
import {List} from "immutable";

export interface RidesListState {
    readonly rides: List<Ride>
    readonly map: Map | undefined
    readonly activePopupId: RideId
}

export interface RidesState {
    readonly ridesList: RidesListState
}

const initialRidesListState: RidesListState = {
    rides: List(),
    map: undefined,
    activePopupId: ""
}


const initialState: RidesState = {
    ridesList: initialRidesListState
}

export {
    initialState as initialRidesState,
    initialRidesListState
}