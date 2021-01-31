
export interface RideViewProps {
    readonly text: string
}

export interface RidesViewActionProps {
    readonly onClick: () => void
}

const RidesView: React.FC<RideViewProps & RidesViewActionProps> = () => {
    return <>
        Rides View
        </>
}

export default RidesView