import {Action} from "redux";
import {RideHttpApi} from "../api/api";
import {put, takeEvery, select} from '@redux-saga/core/effects'
import {LoadRides, Types, RidesLoadedAction, ShowRideOnMap, MapFlyToAction, MapFlyTo} from "./actions";
import {Map, Ride} from "../../types";
import {List} from "immutable";
import {getMap} from "./selectors";

function* onLoadRides(api: RideHttpApi): IterableIterator<unknown> {
    yield takeEvery((a: Action): a is LoadRides => a.type === Types.LoadRides, function* () {
        const rides: List<Ride> = yield api.getRides()
        yield put(RidesLoadedAction(rides))
    })

    yield takeEvery((a: Action): a is ShowRideOnMap => a.type === Types.ShowRideOnMap, function* (a: ShowRideOnMap) {
        yield put(MapFlyToAction(a.payload.startingPoint))
    })

    yield takeEvery((a: Action): a is MapFlyTo => a.type === Types.MapFlyTo, function* (a: MapFlyTo) {
        const map: Map = yield select(getMap)
        map.flyTo([a.payload.point.latitude, a.payload.point.longitude], 15, {duration: 1})
    })
}
export {
    onLoadRides
}