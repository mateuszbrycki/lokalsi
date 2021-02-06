import {Ride} from "../../types";
import {List} from "immutable";

export interface RidesListState {
    readonly rides: List<Ride>
}

export interface RidesState {
    readonly ridesList: RidesListState
}

const initialRidesListState: RidesListState = {
    rides: List()
}


const initialState: RidesState = {
    ridesList: initialRidesListState
}

export {
    initialState as initialRidesState,
    initialRidesListState
}