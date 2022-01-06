import {State} from "./state";
import { combineReducers, Reducer } from "redux";
import {ridesReducer} from "../rides/store/reducers";

const rootReducer: Reducer<State> = combineReducers({
    ridesState: ridesReducer,
})

export { rootReducer }