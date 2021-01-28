export interface ProfileState {
    readonly name: string
}

export interface UserState {
    readonly profile: ProfileState
}

const initialProfileState: ProfileState = {
    name: "ELDOOO"
}


const initialState: UserState = {
    profile: initialProfileState
}

export {
    initialState as initialUserState,
    initialProfileState
}