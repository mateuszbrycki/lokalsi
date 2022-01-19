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

    const sortedRides = rides.sort((rideA, rideB) => {

        const areCitiesTheSame = rideA.city.localeCompare(rideB.city)
        const areTimesTheSame = rideA.time.compareTo(rideB.time)

        if (areCitiesTheSame !== 0) {
            return areCitiesTheSame
        }

        if (rideA.day.number !== rideB.day.number) {
            return rideA.day.number > rideB.day.number ? 1 : -1
        }

        if (areTimesTheSame) {
            return areTimesTheSame
        }

        return 1

    })

    return <article className="rides-list-container">
        <ul className="p-0 mb-0">
            {sortedRides.map(ride =>
                <li key={ride.id}>
                    <RideListElement ride={ride} showOnMap={showOnMap}/>
                    <hr className="w-75 ms-auto me-auto mt-2 mb-0"/>
                </li>
            )}
        </ul>
    </article>
}

export default RidesList