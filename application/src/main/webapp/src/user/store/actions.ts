enum Types {
    ChangeText = "ChangeText",
    ChangeName = "ChangeName",
    Login = "AUTHORIZATION_LOGIN",
    Register = "AUTHORIZATION_REGISTER",
}

export interface ChangeText {
    readonly type: Types.ChangeText
    readonly payload: {
        readonly text: string
    }
}

export interface ChangeName {
    readonly type: Types.ChangeName
    readonly payload: {
        readonly name: string
    }
}

export interface Login {
    readonly type: Types.Login
    readonly payload: {
        readonly email: string
        readonly password: string
    }
}

export interface Register {
    readonly type: Types.Register
    readonly payload: {
        readonly email: string
        readonly password: string
        readonly repeatPassword: string
    }
}

const ChangeTextAction = (newValue: string): ChangeText => ({
    type: Types.ChangeText,
    payload: {text: newValue}
})

const ChangeNameAction = (newName: string): ChangeName => ({
    type: Types.ChangeName,
    payload: {name: newName}
})

const LoginAction = (email: string, password: string): Login => ({
    type: Types.Login,
    payload: {email: email, password: password}
})

const RegisterAction = (email: string, password: string, repeatPassword: string): Register => ({
    type: Types.Register,
    payload: {email: email, password: password, repeatPassword: repeatPassword}
})

export {
    Types,
    ChangeTextAction,
    ChangeNameAction,
    LoginAction,
    RegisterAction
}
