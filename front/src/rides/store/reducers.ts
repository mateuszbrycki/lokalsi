import {initialRidesListState, RidesListState, RidesState} from "./state";
import {Action, combineReducers, Reducer} from "redux";
import {LoadRides, MapFlyTo, RidesLoaded, SetMapState, Types} from "./actions";

type RidesListActions =
    | LoadRides
    | RidesLoaded
    | SetMapState
    | MapFlyTo

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
        case Types.SetMapState:
            return {
                ...state,
                map: action.payload.map
            }
        case Types.MapFlyTo:
            return {
                ...state,
                activePopupId: action.payload.id
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