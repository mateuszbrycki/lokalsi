enum Types {
    ChangeText = "ChangeText"
}

export interface ChangeText {
    readonly type: Types.ChangeText
    readonly payload: {
        readonly text: string
    }
}

const ChangeTextAction = (newValue: string): ChangeText => ({
    type: Types.ChangeText,
    payload: {text: newValue}
})

export {
    Types,
    ChangeTextAction
}
