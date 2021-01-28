
export interface RideViewProps {
    readonly text: string
}

export interface RidesViewActionProps {
    readonly onClick: () => void
}

const RidesView: React.FC<RideViewProps & RidesViewActionProps> = (props) => {
    const {text, onClick} = props
    return <>
        {text}
        <br />
        <button type="button" onClick={onClick}>Change me!</button>

        </>
}

export default RidesView