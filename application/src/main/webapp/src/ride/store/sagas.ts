import {Action} from "redux";
import {RideHttpApi} from "../api/api";
import {put, takeEvery} from '@redux-saga/core/effects'
import {LoadRides, Types, RidesLoadedAction} from "./actions";
import {Ride} from "../../types";
import {List} from "immutable";

function* onLoadRides(api: RideHttpApi): IterableIterator<unknown> {
    yield takeEvery((a: Action): a is LoadRides => a.type === Types.LoadRides, function* () {
        const rides: List<Ride> = yield api.getRides()
        yield put(RidesLoadedAction(rides))
    })
}
export {
    onLoadRides
}