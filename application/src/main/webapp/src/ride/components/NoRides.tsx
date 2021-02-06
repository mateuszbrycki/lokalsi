import React from "react";

export interface NoRidesProps {
}

const NoRides: React.FC<NoRidesProps> = () => {
    return <>
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">No rides!</h5>
                <p className="card-text">It looks like there are no rides yet.</p>
            </div>
        </div>
    </>
}

export default NoRides