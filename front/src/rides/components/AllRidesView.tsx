import React from 'react'
import {useState, useEffect} from 'react';
import RidesMapView from "./RidesMapView";

import RidesList from "./RidesList";
import {List} from "immutable";
import {CENTER_POINT, FilterQuery, Map, MapPoint, Ride, RideId, RidesFilterConfig} from "../../types";

export interface AllRidesProps {
    readonly rides: List<Ride>;
    readonly map: any;
    readonly activePopupId: RideId;
    readonly filterConfig: RidesFilterConfig;
}

export interface AllRidesActionProps {
    readonly showOnMap: (id: RideId, startingPoint: MapPoint) => void
    readonly loadRides: () => void
    readonly onSetMapState: (map: Map) => void
    readonly onFiltersUpdated: (query: FilterQuery) => void
}

export interface WindowDimensions {
    readonly width: number;
    readonly height: number;
}

const AllRidesView: React.FC<AllRidesProps & AllRidesActionProps> = (props) => {

    const {rides, map, activePopupId, filterConfig, showOnMap, loadRides, onSetMapState, onFiltersUpdated} = props

    const mount = (): void => {
        loadRides()
    }
    React.useEffect(mount, [loadRides])

    const getWindowDimensions = (): WindowDimensions => {
        const {innerWidth: width, innerHeight: height} = window;
        return {
            width,
            height
        };
    }

    const useWindowDimensions = (): WindowDimensions => {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }


    return <>
        <main id="all-rides-container" className="container-fluid ">
            <div className="row h-100 g-0">
                <div className="col-md-8 h-sm-25 h-md-8 p-0">
                    <RidesMapView
                        centerPoint={{
                            latitude: CENTER_POINT.latitude,
                            longitude: CENTER_POINT.longitude
                        }}
                        zoom={useWindowDimensions().width <= 768 ? 6 : 6}
                        rides={rides}
                        map={map}
                        setMapState={onSetMapState}
                        activePopupId={activePopupId}
                    />
                </div>
                <div className="col-md-4 overflow-auto h-100 p-0">
                    <RidesList onFiltersUpdated={onFiltersUpdated} rides={rides} filterConfig={filterConfig} showOnMap={(id, startingPoint) => {
                        showOnMap(id, startingPoint)
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}/>
                </div>

            </div>
        </main>
    </>
}

export default AllRidesView