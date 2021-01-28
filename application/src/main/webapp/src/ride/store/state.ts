export interface RidesListState {
    readonly text: string
}

export interface RidesState {
    readonly ridesList: RidesListState
}

const initialRidesListState: RidesListState = {
    text: "ELDOOO"
}


const initialState: RidesState = {
    ridesList: initialRidesListState
}

export {
    initialState as initialRidesState,
    initialRidesListState
}