import {initialRidesState, RidesState} from "../rides/store/state";

export interface State {
    readonly ridesState: RidesState

}

const initialState: State = {
    ridesState: initialRidesState,
}

export { initialState }