import {Action} from "redux";
import {RideHttpApi} from "../api/api";
import {put, takeEvery, select} from '@redux-saga/core/effects'
import {
    LoadRides,
    Types,
    RidesLoadedAction,
    ShowRideOnMap,
    MapFlyToAction,
    MapFlyTo,
    RidesFilterUpdated, FilterConfigLoadedAction, ResetMapStateAction, ResetMapState
} from "./actions";
import {CENTER_POINT, Map, Ride} from "../../types";
import {List} from "immutable";
import {getMap} from "./selectors";
import {TIME_FORMATTER} from "../../common/time";

function* onLoadRides(api: RideHttpApi): IterableIterator<unknown> {
    yield takeEvery((a: Action): a is LoadRides => a.type === Types.LoadRides, function* () {
        const rides: List<Ride> = yield api.getRides()
        yield put(RidesLoadedAction(rides))

        const rideTypes = rides.map(ride => ride.rideType).toSet()

        const cities = rides.map(ride => ride.city).toSet().sort().map(city => {
            return {name: city, id: city, key: city}
        })

        const times = rides.map(ride => ride.time).toSet().sort((timeA, timeB) => timeA.compareTo(timeB)).map(time => time.format(TIME_FORMATTER)).map(time => {
            return {name: time, id: time, key: time}
        })

        const days = rides.map(ride => ride.day).toSet().sort((dayA, dayB) => dayA.number > dayB.number ? 1 : -1).map(day => {
            return {name: day.name, id: day.number, key: day.name}
        })

        yield put(FilterConfigLoadedAction(rideTypes, cities, times, days))
    })

    yield takeEvery((a: Action): a is ShowRideOnMap => a.type === Types.ShowRideOnMap, function* (a: ShowRideOnMap) {
        yield put(MapFlyToAction(a.payload.id, a.payload.startingPoint))
    })

    yield takeEvery((a: Action): a is MapFlyTo => a.type === Types.MapFlyTo, function* (a: MapFlyTo) {
        const map: Map = yield select(getMap)
        map.flyTo([a.payload.point.latitude, a.payload.point.longitude], 15, {duration: 1})
    })

    yield takeEvery((a: Action): a is RidesFilterUpdated => a.type === Types.RidesFilterUpdated, function* (a: RidesFilterUpdated) {
        const rides: List<Ride> = yield api.getRidesWithFilter(a.payload)
        yield put(RidesLoadedAction(rides))
        yield put(ResetMapStateAction())
    })

    yield takeEvery((a: Action): a is ResetMapState => a.type === Types.ResetMapState, function* (a: ResetMapState) {
        const map: Map = yield select(getMap)
        if (map) {
            map.flyTo([CENTER_POINT.latitude, CENTER_POINT.longitude], 6, {duration: 1})
        }
    })
}

export {
    onLoadRides
}