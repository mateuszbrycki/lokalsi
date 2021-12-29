import React from 'react'
import RidesMapView from "./RidesMapView";
import {RideApi} from "../api/api";
import RidesList from "./RidesList";

export interface AllRidesProps {

}

export interface AllRidesActionProps {
}

const AllRidesView: React.FC<AllRidesProps & AllRidesActionProps> = (props) => {

    const rides = RideApi.getRides();

    return <>
        <div className="container all-rides-container">
            <div className="row h-100">
                <div className="col-sm-8 h-sm-25 p-0">
                    <RidesMapView
                        centerPoint={{
                            latitude: 50.061060,
                            longitude: 19.938625
                        }}
                        zoom={11}
                        rides={rides}/>
                </div>
                <div className="col-sm-4 overflow-auto h-100 p-0 bg-light">
                    <RidesList rides={rides}/>
                </div>

            </div>
        </div>
    </>
}

export default AllRidesView