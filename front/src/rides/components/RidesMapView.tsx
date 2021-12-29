import React from 'react'
import {MapContainer, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import {MapPoint, Ride} from "../../types";
import {List} from "immutable"
import RideMarker from "./RideMarker";

export interface RidesMapViewProps {
    readonly centerPoint: MapPoint;
    readonly zoom: number;
    readonly rides: List<Ride>;
}

export interface RidesMapViewActionProps {
}


const RidesMapView: React.FC<RidesMapViewProps & RidesMapViewActionProps> = (props) => {

    const {centerPoint, zoom, rides} = props
    return <>
        <MapContainer center={[centerPoint.latitude,centerPoint.longitude]} zoom={zoom} scrollWheelZoom={false} id="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
                { rides.map(ride => <RideMarker ride={ride} />) }
            </MarkerClusterGroup>
        </MapContainer>
    </>
}

export default RidesMapView