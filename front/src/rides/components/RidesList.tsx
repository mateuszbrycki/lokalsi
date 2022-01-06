import React from 'react'
import {List} from "immutable";
import {MapPoint, Ride} from "../../types";
import RideListElement from "./RideListElement";

export interface RidesListProps {
    readonly rides: List<Ride>;
}

export interface RidesListActionProps {
    readonly showOnMap: (startingPoint: MapPoint) => void
}

const RidesList: React.FC<RidesListProps & RidesListActionProps> = (props) => {

    const {rides, showOnMap} = props

    return <div className="rides-list-container">
        <ul className="p-0 mb-0">
            {rides.map(ride =>
                <li key={ride.id}>
                    <RideListElement ride={ride} showOnMap={showOnMap}/>
                    <hr className="w-75 ms-auto me-auto mt-2 mb-0"/>
                </li>
            )}
        </ul>
    </div>
}

export default RidesList