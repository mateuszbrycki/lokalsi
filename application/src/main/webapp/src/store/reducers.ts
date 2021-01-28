import {State} from "./state";
import { combineReducers, Reducer } from "redux";
import {ridesReducer} from "../ride/store/reducers";

const rootReducer: Reducer<State> = combineReducers({
    ridesState: ridesReducer
})

export { rootReducer }