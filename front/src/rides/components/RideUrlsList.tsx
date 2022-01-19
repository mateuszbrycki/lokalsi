import React, {ComponentType} from 'react'
import {Ride, RideUrls} from "../../types";
import * as Icon from "react-bootstrap-icons";

export interface RideUrlsListProps {
    readonly rideUrls: RideUrls;
}

export interface RideUrlsListActionProps {
}


const RideUrlsList: React.FC<RideUrlsListProps & RideUrlsListActionProps> = (props) => {

    const {rideUrls} = props

    const getIconWithUrl = (url: string, icon: JSX.Element): JSX.Element => {
        return <a target="_blank" href={url}>{icon}</a>
    }

    return (<ul className="ride-urls-icons-list list-inline">
        {rideUrls.strava ?
            <li key="ride-url-icon-strava" className="list-inline-item">{getIconWithUrl(rideUrls.strava, <Icon.Strava/>)}</li> : <></>}
        {rideUrls.facebook ?
            <li key="ride-url-icon-facebook" className="list-inline-item">{getIconWithUrl(rideUrls.facebook, <Icon.Facebook/>)}</li> : <></>}
        {rideUrls.webpage ?
            <li key="ride-url-icon-webpage" className="list-inline-item">{getIconWithUrl(rideUrls.webpage, <Icon.Globe/>)}</li> : <></>}
    </ul>)
}

export default RideUrlsList