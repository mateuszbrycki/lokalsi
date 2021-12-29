import React from 'react'
import {Ride} from "../../types";
import {Marker, Popup} from "react-leaflet";

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
                <div><p className="fw-bold p-0 m-0">{ride.day}, {ride.time}</p></div>
                <div className="py-3">{ride.description}</div>
                <div><a href={ride.url} >Grupa FB</a></div>
            </Popup>
        </Marker>

    </>
}

export default RideMarker