import React from 'react'
import {Ride} from "../../types";
import * as Icon from "react-bootstrap-icons";
import RideUrlsList from "./RideUrlsList";
import RideBadge from "./RideBadge";
import {Button, Col, Row} from "react-bootstrap";

export interface RideMarkerProps {
    readonly ride: Ride;
}

export interface RideMarkerActionProps {
}


const RideListElement: React.FC<RideMarkerProps & RideMarkerActionProps> = (props) => {

    const {ride} = props

    return <>
        <div key={ride.id} className="rides-list-element px-3 pt-1">
            <h5 className="fw-bold mt-2">{ride.name} </h5>
            <RideBadge rideType={ride.rideType} className="me-1 mb-2 fs-7"/>
            <div className="rides-list-element-date-time ms-1"><Icon.Calendar className="me-2"/>{ride.day}, {ride.time}
            </div>
            <div className="py-2 ps-2 rides-list-element-description">{ride.description}</div>
            <div className="d-flex py-2 ps-2 pe-2">
                <div className="rides-list-element-links">
                        <RideUrlsList rideUrls={ride.url}/>
                </div>
                <div className="ms-auto  fs-7">
                    <Button className="rides-list-element-show-on-map">Pokaż na mapie</Button>
                </div>
            </div>
        </div>
    </>
}

export default RideListElement