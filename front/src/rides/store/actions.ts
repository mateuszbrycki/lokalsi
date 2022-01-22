import {Map, MapPoint, MultiselectOption, Ride, RideId, RideType} from "../../types";
import {List, Set} from "immutable";

enum Types {
    LoadRides = "RIDE_LOAD_RIDES",
    RidesLoaded = "RIDE_RIDES_LOADED",
    ShowRideOnMap = "SHOW_RIDE_ON_MAP",
    MapFlyTo = "MAP_FLY_TO",
    SetMapState = "SET_MAP_STATE",
    RidesFilterUpdated = "RIDES_FILTER_UPDATED",
    FilterConfigLoaded = "FILTER_CONFIG_LOADED",
    ResetMapState = "RESET_MAP_STATE",
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

export interface ResetMapState {
    readonly type: Types.ResetMapState
    readonly payload: {}
}

export interface RidesFilterUpdated {
    readonly type: Types.RidesFilterUpdated
    readonly payload: {
        rideTypes: Set<RideType>,
        cities: Set<string>,
        times: Set<string>,
        days: Set<string>
    }
}

export interface FilterConfigLoaded {
    readonly type: Types.FilterConfigLoaded
    readonly payload: {
        rideTypes: Set<RideType>,
        cities: Set<MultiselectOption>,
        times: Set<MultiselectOption>,
        days: Set<MultiselectOption>
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


const RidesFilterUpdatedAction = (rideTypes: Set<RideType>, cities: Set<string>, times: Set<string>, days: Set<string>): RidesFilterUpdated => ({
    type: Types.RidesFilterUpdated,
    payload: {
        rideTypes,
        cities,
        times,
        days
    }
})

const FilterConfigLoadedAction = (rideTypes: Set<RideType>, cities: Set<MultiselectOption>, times: Set<MultiselectOption>, days: Set<MultiselectOption>): FilterConfigLoaded => ({
    type: Types.FilterConfigLoaded,
    payload: {
        rideTypes,
        cities,
        times,
        days
    }
})

const ResetMapStateAction = (): ResetMapState => ({
    type: Types.ResetMapState,
    payload: {}
})

export {
    Types,
    LoadRidesAction,
    RidesLoadedAction,
    ShowOnMapAction,
    MapFlyToAction,
    SetMapStateAction,
    RidesFilterUpdatedAction,
    FilterConfigLoadedAction,
    ResetMapStateAction
}