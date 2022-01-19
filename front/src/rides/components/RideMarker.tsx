import React from 'react'
import {Ride} from "../../types";
import {Marker, Popup} from "react-leaflet";
import * as Icon from "react-bootstrap-icons";
import RideUrlsList from "./RideUrlsList";
import RideBadge from "./RideBadge";
import {renderToStaticMarkup} from "react-dom/server";
import {divIcon} from "leaflet";
import {DateTimeFormatter} from "@js-joda/core";

export interface RideMarkerProps {
    readonly ride: Ride;
}

export interface RideMarkerActionProps {
}


const RideMarker: React.FC<RideMarkerProps & RideMarkerActionProps> = (props) => {

    const {ride} = props

    const iconMarkup = renderToStaticMarkup(<Icon.GeoAltFill style={{color: ride.rideType.color, fontSize: '2rem'}}/>);
    const customMarkerIcon = divIcon({
        html: iconMarkup,
        iconAnchor: [15, 33],
        popupAnchor: [0, -20]
    });
    return <>
        <Marker position={[ride.startingPoint.latitude, ride.startingPoint.longitude]} icon={customMarkerIcon}>
            <Popup>
                <h2 className="ride-name fw-bold mt-2">{ride.name}</h2>
                <div className="d-flex py-2 ps-2 pe-2">
                    <RideBadge rideType={ride.rideType} className="me-1 mb-2 fs-6"/>
                    <div><p className="fw-bold p-0 m-0 ride-marker-date-time mt-1 ms-2"><Icon.Calendar
                        className="me-2"/>{ride.day.name}, {ride.time.format(DateTimeFormatter.ofPattern("hh:mm"))}</p></div>
                </div>
                <div className="py-2 ride-marker-description">{ride.description}</div>
                <div className="py-2 ps-2 ride-marker-links">
                    <RideUrlsList rideUrls={ride.url}/>
                </div>
            </Popup>
        </Marker>

    </>
}

export default RideMarker