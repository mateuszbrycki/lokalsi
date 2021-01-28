
export interface UserViewProps {
    readonly text: string
}

export interface UserViewActionProps {
    readonly onClick: () => void
}

const RidesView: React.FC<UserViewProps & UserViewActionProps> = (props) => {
    const {text, onClick} = props
    return <>
        Hello {text}
        <br />
        <button type="button" onClick={onClick}>Change me for user!</button>

        </>
}

export default RidesView