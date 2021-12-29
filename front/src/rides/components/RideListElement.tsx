import React from 'react'
import {Ride} from "../../types";
import {Marker, Popup} from "react-leaflet";

export interface RideMarkerProps {
    readonly ride: Ride;
}

export interface RideMarkerActionProps {
}


const RideListElement: React.FC<RideMarkerProps & RideMarkerActionProps> = (props) => {

    const {ride} = props
    return <>
        <div>
                <h4>{ride.name}</h4>
                <div><b>Dzień:</b> {ride.day}</div>
                <div><b>Godzina:</b> {ride.time}</div>
                <div className="py-3">{ride.description}</div>
            <div><a href={ride.url} >Grupa FB</a></div>

        </div>
        <hr className="w-75 ms-auto me-auto mt-3 mb-0"/>
    </>
}

export default RideListElement