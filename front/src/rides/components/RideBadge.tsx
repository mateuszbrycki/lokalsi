import React from "react";
import {Set} from "immutable"
import {RideType} from "../../types";

export interface RideBadgeProps {
    readonly rideTypes: Set<RideType>;
    readonly className?: string;
}

export interface RideBadgeActionProps {
}


const RideBadge: React.FC<RideBadgeProps & RideBadgeActionProps> = (props) => {

    const {rideTypes, className} = props

    return (
        <div className={className}>
            {rideTypes.map(rideType => <span className="badge" style={{backgroundColor: rideType.color}}>{rideType.name}</span>)}

        </div>
    )
}

export default RideBadge
