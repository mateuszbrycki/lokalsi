import {Map, Ride} from "../../types";
import {List} from "immutable";

export interface RidesListState {
    readonly rides: List<Ride>
    readonly map: Map | undefined
}

export interface RidesState {
    readonly ridesList: RidesListState
}

const initialRidesListState: RidesListState = {
    rides: List(),
    map: undefined
}


const initialState: RidesState = {
    ridesList: initialRidesListState
}

export {
    initialState as initialRidesState,
    initialRidesListState
}