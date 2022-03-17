import React from 'react'
import {List} from "immutable";
import {FilterQuery, MapPoint, Ride, RideId, RidesFilterConfig} from "../../types";
import RideListElement from "./RideListElement";
import RidesFilters from "./RidesFilters";

export interface RidesListProps {
    readonly rides: List<Ride>;
    readonly filterConfig: RidesFilterConfig;
}

export interface RidesListActionProps {
    readonly showOnMap: (id: RideId, startingPoint: MapPoint) => void
    readonly onFiltersUpdated: (query: FilterQuery) => void
}

const RidesList: React.FC<RidesListProps & RidesListActionProps> = (props) => {

    const {rides, filterConfig, showOnMap, onFiltersUpdated} = props

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

    return <div id="rides-list-container">
        <RidesFilters config={filterConfig} onFiltersUpdated={onFiltersUpdated} />

        {rides.size > 0 ?
            <ul className="p-0 mb-0">
                {sortedRides.map(ride =>
                    <li key={ride.id}>
                        <RideListElement ride={ride} showOnMap={showOnMap}/>
                        <hr className="w-75 ms-auto me-auto mt-2 mb-0"/>
                    </li>
                )}
            </ul> : <p className="text-center mt-5 p-4 text-muted">Nie znaleźliśmy ustawek spełniających kryteria wyszukiwania!</p>
        }
    </div>
}

export default RidesList