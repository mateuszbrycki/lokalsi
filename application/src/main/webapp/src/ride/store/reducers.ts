import {initialRidesListState, RidesListState, RidesState} from "./state";
import {Action, combineReducers, Reducer} from "redux";
import {LoadRides, RidesLoaded, Types} from "./actions";

type RidesListActions =
    | LoadRides
    | RidesLoaded

const ridesListReducer = (
    state: RidesListState | undefined = initialRidesListState,
    incomingAction: Action,
): RidesListState => {
    const action = incomingAction as RidesListActions
    switch (action.type) {
        case Types.RidesLoaded:
            return {
                ...state,
                rides: action.payload.rides
            }
        default:
            return state
    }
}

const ridesReducer: Reducer<RidesState> = combineReducers({
        ridesList: ridesListReducer
    }
)

export {
    ridesReducer
}