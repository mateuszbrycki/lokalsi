import React from 'react'
import {useState, useEffect} from 'react';
import RidesMapView from "./RidesMapView";

import RidesList from "./RidesList";
import {List} from "immutable";
import {Map, MapPoint, Ride} from "../../types";

export interface AllRidesProps {
    readonly rides: List<Ride>;
    readonly map: any;
}

export interface AllRidesActionProps {
    readonly showOnMap: (startingPoint: MapPoint) => void
    readonly loadRides: () => void
    readonly onSetMapState: (map: Map) => void
}

export interface WindowDimensions {
    readonly width: number;
    readonly height: number;
}

const AllRidesView: React.FC<AllRidesProps & AllRidesActionProps> = (props) => {

    const {rides, map, showOnMap, loadRides, onSetMapState} = props

    const mount = (): void => {
        loadRides()
    }
    React.useEffect(mount, [])

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
        <main className="container-fluid all-rides-container">
            <div className="row h-100 g-0">
                <div className="col-md-8 h-sm-25 h-md-8 p-0">
                    <RidesMapView
                        centerPoint={{
                            latitude: 52.125736,
                            longitude: 19.080392
                        }}
                        zoom={useWindowDimensions().width <= 768 ? 6 : 6}
                        rides={rides}
                        map={map}
                        setMapState={onSetMapState}
                    />
                </div>
                <div className="col-md-4 overflow-auto h-100 p-0">
                    <RidesList rides={rides} showOnMap={startingPoint => {
                        showOnMap(startingPoint)
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