import {all} from '@redux-saga/core/effects'
import {onLoadRides} from "../rides/store/sagas";
import {RideApi} from "../rides/api/api";

function* rootSaga(): IterableIterator<unknown> {
    yield all([
        onLoadRides(RideApi)
    ])
}

export default rootSaga