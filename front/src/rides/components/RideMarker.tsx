import React from 'react'
import {Ride} from "../../types";
import {Marker, Popup} from "react-leaflet";
import * as Icon from "react-bootstrap-icons";
import RideUrlsList from "./RideUrlsList";

export interface RideMarkerProps {
    readonly ride: Ride;
}

export interface RideMarkerActionProps {
}


const RideMarker: React.FC<RideMarkerProps & RideMarkerActionProps> = (props) => {

    const {ride} = props
    return <>
        <Marker position={[ride.startingPoint.latitude, ride.startingPoint.longitude]}>
            <Popup>
                <h5>{ride.name}</h5>
                <div><p className="fw-bold p-0 m-0 ride-marker-date-time"><Icon.Calendar className="me-2"/>{ride.day}, {ride.time}</p></div>
                <div className="py-2 ride-marker-description">{ride.description}</div>
                <div className="py-2 ps-2 ride-marker-links">
                    <RideUrlsList rideUrls={ride.url} />
                </div>
            </Popup>
        </Marker>

    </>
}

export default RideMarker