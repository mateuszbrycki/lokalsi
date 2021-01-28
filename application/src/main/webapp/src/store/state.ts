import {initialRidesState, RidesState} from "../ride/store/state";
import {initialUserState, UserState} from "../user/store/state";

export interface State {
    readonly ridesState: RidesState
    readonly userState: UserState

}

const initialState: State = {
    ridesState: initialRidesState,
    userState: initialUserState
}

export { initialState }