import React from 'react'
import {MapContainer, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import {Map, MapPoint, Ride, RideId} from "../../types";
import {List} from "immutable"
import RideMarker from "./RideMarker";

export interface RidesMapViewProps {
    readonly centerPoint: MapPoint;
    readonly zoom: number;
    readonly rides: List<Ride>;
    readonly map: Map;
    readonly activePopupId: RideId;
}

export interface RidesMapViewActionProps {
    readonly setMapState: (map: Map) => void
}


const RidesMapView: React.FC<RidesMapViewProps & RidesMapViewActionProps> = (props) => {
    const {centerPoint, zoom, rides, map, setMapState, activePopupId} = props

    return <div id="map-container">
        <MapContainer center={[centerPoint.latitude, centerPoint.longitude]} zoom={zoom} scrollWheelZoom={false}
                      id="map" className="w-100"
                      whenCreated={mapState => setMapState(mapState)}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup showCoverageOnHover={false}>
                {rides.map(ride => <RideMarker map={map} ride={ride} key={ride.id} isActive={ride.id === activePopupId}/>)}
            </MarkerClusterGroup>
        </MapContainer>
    </div>
}

export default RidesMapView