import React from 'react'
import {Ride} from "../../types";
import * as Icon from "react-bootstrap-icons";

export interface RideMarkerProps {
    readonly ride: Ride;
}

export interface RideMarkerActionProps {
}


const RideListElement: React.FC<RideMarkerProps & RideMarkerActionProps> = (props) => {

    const {ride} = props
    return <>
        <div className="rides-list-element">
            <h5 className="fw-bold mt-2">{ride.name}</h5>
            <div className="rides-list-element-date-time"><Icon.Calendar className="me-2"/>{ride.day}, {ride.time}</div>
            <div className="py-2 ps-2 rides-list-element-description">{ride.description}</div>
            <div className="py-2 ps-2 rides-list-element-links">
                <a href={ride.url} >
                    <Icon.Facebook className="me-2"/>
                </a>
                <a href={ride.url} >
                    <Icon.Globe className="me-2"/>
                </a>
                <a href={ride.url} >
                    <Icon.Strava className="me-2"/>
                </a>
            </div>
        </div>
    </>
}

export default RideListElement