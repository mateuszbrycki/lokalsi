import React from 'react'
import {List} from "immutable";
import {Ride} from "../../types";
import RideListElement from "./RideListElement";

export interface RidesListProps {
    readonly rides: List<Ride>;

}

export interface RidesListActionProps {
}

const RidesList: React.FC<RidesListProps & RidesListActionProps> = (props) => {

    const {rides} = props

    return <div className="rides-list-container">
        <ul className="p-0 pt-1">
            {rides.map(ride => <li className="px-3 pt-1"><RideListElement ride={ride}/></li>)}
        </ul>
    </div>
}

export default RidesList