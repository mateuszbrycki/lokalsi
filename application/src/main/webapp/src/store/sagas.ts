import {all} from '@redux-saga/core/effects'
import {onLoadRides} from "../ride/store/sagas";
import {RideApi} from "../ride/api/api";

function* rootSaga(): IterableIterator<unknown> {
    yield all([
        onLoadRides(RideApi)
    ])
}

export default rootSaga