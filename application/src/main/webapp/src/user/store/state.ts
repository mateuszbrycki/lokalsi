export interface ProfileState {
    readonly name: string
}

export interface AuthorizationState {
    readonly token: string | undefined

}

export interface UserState {
    readonly profile: ProfileState
    readonly authorization: AuthorizationState
}

const initialProfileState: ProfileState = {
    name: "ELDOOO"
}

const initialAuthorizationState: AuthorizationState = {
    token: "undefined"
}


const initialState: UserState = {
    profile: initialProfileState,
    authorization: initialAuthorizationState
}

export {
    initialState as initialUserState,
    initialProfileState,
    initialAuthorizationState
}