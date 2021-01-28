import {initialRidesState, RidesState} from "../ride/store/state";

export interface State {
    readonly ridesState: RidesState

}

const initialState: State = {
    ridesState: initialRidesState
}

export { initialState }