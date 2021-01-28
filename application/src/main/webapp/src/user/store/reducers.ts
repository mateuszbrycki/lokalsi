import {initialProfileState, ProfileState, UserState} from "./state";
import {Action, combineReducers, Reducer} from "redux";
import {ChangeName, Types} from "./actions";

type ProfileActions =
    | ChangeName

const profileReducer = (
    state: ProfileState | undefined = initialProfileState,
    incomingAction: Action,
): ProfileState => {
    const action = incomingAction as ProfileActions
    switch (action.type) {
        case Types.ChangeName:
            return {
                ...state,
                name: action.payload.name
            }
        default:
            return state
    }
}

const userReducer: Reducer<UserState> = combineReducers({
        profile: profileReducer
    }
)

export {
    userReducer
}