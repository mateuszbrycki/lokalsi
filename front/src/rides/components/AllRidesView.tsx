import React from 'react'
import { useState, useEffect } from 'react';
import RidesMapView from "./RidesMapView";
import {RideApi} from "../api/api";

import RidesList from "./RidesList";

export interface AllRidesProps {

}

export interface AllRidesActionProps {
}

export interface WindowDimensions {
    readonly width: number;
    readonly height: number;
}




const AllRidesView: React.FC<AllRidesProps & AllRidesActionProps> = (props) => {

    const rides = RideApi.getRides();

    const getWindowDimensions = (): WindowDimensions => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const useWindowDimensions = () : WindowDimensions => {
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
        <div className="container all-rides-container">
            <div className="row h-100">
                <div className="col-sm-8 h-sm-25 p-0">
                    <RidesMapView
                        centerPoint={{
                            latitude: 52.125736,
                            longitude: 19.080392
                        }}
                        zoom={useWindowDimensions().width <= 575 ? 5 : 6}
                        rides={rides}/>
                </div>
                <div className="col-sm-4 overflow-auto h-100 p-0">
                    <RidesList rides={rides}/>
                </div>

            </div>
        </div>
    </>
}

export default AllRidesView