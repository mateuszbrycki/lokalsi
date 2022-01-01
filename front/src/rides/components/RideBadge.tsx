import React from "react";
import {RideType} from "../../types";

export interface RideBadgeProps {
    readonly rideType: RideType;
    readonly className?: string;
}

export interface RideBadgeActionProps {
}


const RideBadge: React.FC<RideBadgeProps & RideBadgeActionProps> = (props) => {

    const {rideType, className} = props

    const getTranslatedName = (rideType: RideType): string => {
        if (rideType === RideType.ROAD) {
            return "Szosa"
        }

        return rideType.name
    }

    return (
        <div className={className}>
            <span className="badge" style={{backgroundColor: rideType.color}}>{getTranslatedName(rideType)}</span>
        </div>
    )
}

export default RideBadge
