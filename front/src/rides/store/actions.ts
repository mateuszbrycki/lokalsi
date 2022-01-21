import {Map, MapPoint, Ride, RideId} from "../../types";
import {List} from "immutable";

enum Types {
    LoadRides = "RIDE_LOAD_RIDES",
    RidesLoaded = "RIDE_RIDES_LOADED",
    ShowRideOnMap = "SHOW_RIDE_ON_MAP",
    MapFlyTo = "MAP_FLY_TO",
    SetMapState = "SET_MAP_STATE"
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

export interface ShowRideOnMap {
    readonly type: Types.ShowRideOnMap
    readonly payload: {
        id: RideId
        startingPoint: MapPoint
    }
}

export interface MapFlyTo {
    readonly type: Types.MapFlyTo
    readonly payload: {
        id: RideId
        point: MapPoint
    }
}

export interface SetMapState {
    readonly type: Types.SetMapState
    readonly payload: {
        map: Map
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

const ShowOnMapAction = (id: RideId, startingPoint: MapPoint): ShowRideOnMap => ({
    type: Types.ShowRideOnMap,
    payload: {
        id,
        startingPoint: startingPoint
    }
})

const MapFlyToAction = (id: RideId, point: MapPoint): MapFlyTo => ({
    type: Types.MapFlyTo,
    payload: {
        id,
        point
    }
})

const SetMapStateAction = (mapState: Map): SetMapState => ({
    type: Types.SetMapState,
    payload: {
        map: mapState
    }
})

export {
    Types,
    LoadRidesAction,
    RidesLoadedAction,
    ShowOnMapAction,
    MapFlyToAction,
    SetMapStateAction
}