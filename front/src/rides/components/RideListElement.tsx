import React from 'react'
import {Ride} from "../../types";
import * as Icon from "react-bootstrap-icons";
import RideUrlsList from "./RideUrlsList";

export interface RideMarkerProps {
    readonly ride: Ride;
}

export interface RideMarkerActionProps {
}


const RideListElement: React.FC<RideMarkerProps & RideMarkerActionProps> = (props) => {

    const {ride} = props

    return <>
        <div key={ride.id} className="rides-list-element px-3 pt-1">
            <h5 className="fw-bold mt-2"><Icon.CircleFill className="me-2" color={ride.rideType.color} />{ride.name} </h5>
            <div className="rides-list-element-date-time ms-1"><Icon.Calendar className="me-2"/>{ride.day}, {ride.time}</div>
            <div className="py-2 ps-2 rides-list-element-description">{ride.description}</div>
            <div className="py-2 ps-2 rides-list-element-links">
                <RideUrlsList rideUrls={ride.url} />
            </div>
        </div>
    </>
}

export default RideListElement