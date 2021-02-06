import React from "react";
import {Ride} from "../../types";
import {List} from "immutable";
import SingleRide from "./SingleRide";
import NoRides from "./NoRides";

export interface RideViewProps {
    readonly rides: List<Ride>
}

export interface RidesViewActionProps {
    readonly loadRides: () => void

}

const RidesView: React.FC<RideViewProps & RidesViewActionProps> = (props) => {

    const {rides, loadRides} = props
    const mount = (): void => {
        loadRides()
    }

    React.useEffect(mount, [])

    return <>
        <h1>Rides</h1>
        {rides.size === 0 ? <NoRides /> :rides.map(ride =>
            <SingleRide ride={ride}/>
        )}
    </>
}

export default RidesView