import React from 'react'
import {MapPoint, Ride, RideId} from "../../types";
import * as Icon from "react-bootstrap-icons";
import RideUrlsList from "./RideUrlsList";
import RideBadge from "./RideBadge";
import {Button} from "react-bootstrap";
import {TIME_FORMATTER} from "../../common/time";
import EditRideModal from './EditRideModal';

export interface RideMarkerProps {
    readonly ride: Ride;
}

export interface RideMarkerActionProps {
    readonly showOnMap: (id: RideId, startingPoint: MapPoint) => void
}


const RideListElement: React.FC<RideMarkerProps & RideMarkerActionProps> = (props) => {

    const {ride, showOnMap} = props

    const onClick = () => {
        showOnMap(ride.id, ride.startingPoint)
    }

    return <>
        <article key={ride.id} className="rides-list-element px-3 pt-1">
            <h2 className="ride-name fw-bold mt-2">{ride.name} </h2>
            <div className="d-flex py-2 ps-2 pe-2">
                <RideBadge rideTypes={ride.rideTypes} className="me-1 mb-2 fs-7"/>
                <div className="rides-list-element-city mb-2 mt-1 ms-2">
                    <Icon.PinFill className="me-2"/> {ride.city}
                </div>
                <div className="rides-list-element-date-time ms-2  mt-1">
                    <Icon.Calendar className="me-2"/>{ride.day.name}, {ride.time.format(TIME_FORMATTER)}
                </div>
            </div>

            <div className="py-2 ps-2 rides-list-element-description">{ride.description}</div>
            <div className="d-flex py-2 ps-2 pe-2">
                <div className="rides-list-element-links">
                    <RideUrlsList rideUrls={ride.url}/>
                </div>
                <div className="ms-auto fs-7">
                    <Button className="rides-list-element-show-on-map" onClick={onClick}><Icon.GeoAltFill style={{fontSize: '1rem', marginRight: '0.3rem'}}/>Miejsce startu</Button>
                </div>
            </div>
            <div className="d-flex ps-2 ms-auto me-0">
                <div className="rides-list-element-city">
                    <EditRideModal ride={ride}/>
                </div>
            </div>
        </article>
    </>
}

export default RideListElement