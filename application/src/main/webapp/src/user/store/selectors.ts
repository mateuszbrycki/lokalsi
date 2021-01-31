import {createSelector} from 'reselect'
import {State} from "../../store/state";
import {AuthorizationState, ProfileState, UserState} from "./state";

const getUserState = (state: State): UserState => state.userState
const getProfileState = createSelector(
    getUserState,
    (state: UserState) => state.profile
)
const getAuthorizationState = createSelector(
    getUserState,
    (state: UserState) => state.authorization
)

const getText = createSelector(
    getProfileState,
    (state: ProfileState) => state.name
)

const isUserLoggedIn = createSelector(
    getAuthorizationState,
    (state: AuthorizationState) => state.token !== undefined
)

export {
    getText,
    isUserLoggedIn
}