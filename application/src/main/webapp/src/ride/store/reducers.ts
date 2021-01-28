import {initialRidesListState, RidesListState, RidesState} from "./state";
import {Action, combineReducers, Reducer} from "redux";
import {ChangeText, Types} from "./actions";

type RidesListActions =
    | ChangeText

const ridesListReducer = (
    state: RidesListState | undefined = initialRidesListState,
    incomingAction: Action,
): RidesListState => {
    const action = incomingAction as RidesListActions
    switch (action.type) {
        case Types.ChangeText:
            return {
                ...state,
                text: action.payload.text
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