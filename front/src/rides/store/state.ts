import {Map, Ride, RideId, RidesFilterConfig} from "../../types";
import {List,Set} from "immutable";

export interface RidesListState {
    readonly rides: List<Ride>
    readonly map: Map | undefined
    readonly activePopupId: RideId
    readonly filterConfig: RidesFilterConfig
}

export interface RidesState {
    readonly ridesList: RidesListState
}

const initialRidesListState: RidesListState = {
    rides: List(),
    map: undefined,
    activePopupId: "",
    filterConfig: {
        rideTypes: Set(),
        cities: Set(),
        days: Set(),
        times: Set()
    }
}


const initialState: RidesState = {
    ridesList: initialRidesListState
}

export {
    initialState as initialRidesState,
    initialRidesListState
}