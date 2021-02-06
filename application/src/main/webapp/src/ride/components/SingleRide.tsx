import {Ride} from "../../types";
import React from "react";
import styled from 'styled-components'

export interface SingleRideProps {
    readonly ride: Ride
}

const RideSpan = styled.div`
    margin-top: 10px;
`

const SingleRide: React.FC<SingleRideProps> = (props) => {
    const {ride} = props
    return <>
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{ride.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ride.rideTime}</h6>
                <h6 className="card-subtitle">{ride.advancementLevel}</h6>
                <p className="card-text">{ride.description}</p>
            </div>
        </div>
        <RideSpan />
    </>

}

export default SingleRide