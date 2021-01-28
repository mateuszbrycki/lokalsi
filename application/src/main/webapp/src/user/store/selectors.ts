import {createSelector} from 'reselect'
import {State} from "../../store/state";
import {ProfileState, UserState} from "./state";

const getUserState = (state: State): UserState => state.userState
const getProfileState = createSelector(
    getUserState,
    (state: UserState) => state.profile
)

const getText = createSelector(
    getProfileState,
    (state: ProfileState) => state.name
)

export {
    getText
}