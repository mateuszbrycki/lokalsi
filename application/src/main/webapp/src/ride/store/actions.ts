import {Ride} from "../../types";
import {List} from "immutable";

enum Types {
    LoadRides = "RIDE_LOAD_RIDES",
    RidesLoaded = "RIDE_RIDES_LOADED"
}

export interface LoadRides {
    readonly type: Types.LoadRides
}

export interface RidesLoaded {
    readonly type: Types.RidesLoaded
    readonly payload: {
        rides: List<Ride>
    }
}

const LoadRidesAction = (): LoadRides => ({
    type: Types.LoadRides,
})

const RidesLoadedAction = (rides: List<Ride>): RidesLoaded => ({
    type: Types.RidesLoaded,
    payload: {
        rides: rides
    }
})

export {
    Types,
    LoadRidesAction,
    RidesLoadedAction
}
