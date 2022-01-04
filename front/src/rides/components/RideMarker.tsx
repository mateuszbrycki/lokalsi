import React from 'react'
import {Ride} from "../../types";
import {Marker, Popup} from "react-leaflet";
import * as Icon from "react-bootstrap-icons";
import RideUrlsList from "./RideUrlsList";
import RideBadge from "./RideBadge";
import {renderToStaticMarkup} from "react-dom/server";
import {divIcon} from "leaflet";

export interface RideMarkerProps {
    readonly ride: Ride;
}

export interface RideMarkerActionProps {
}


const RideMarker: React.FC<RideMarkerProps & RideMarkerActionProps> = (props) => {

    const {ride} = props

    const iconMarkup = renderToStaticMarkup(<Icon.GeoAltFill style={{color: ride.rideType.color, fontSize: '2rem'}} />);
    const customMarkerIcon = divIcon({
        html: iconMarkup,
        iconAnchor: [15, 33],
        popupAnchor: [0,-20]
    });
    return <>
        <Marker position={[ride.startingPoint.latitude, ride.startingPoint.longitude]} icon={customMarkerIcon}>
            <Popup>
                <h5 className="fw-bold mt-2">{ride.name}</h5>
                <RideBadge rideType={ride.rideType} className="me-1 mb-2 fs-6"/>
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