enum Types {
    ChangeText = "ChangeText",
    ChangeName = "ChangeName",
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

const ChangeTextAction = (newValue: string): ChangeText => ({
    type: Types.ChangeText,
    payload: {text: newValue}
})

const ChangeNameAction = (newName: string): ChangeName => ({
    type: Types.ChangeName,
    payload: {name: newName}
})

export {
    Types,
    ChangeTextAction,
    ChangeNameAction
}
