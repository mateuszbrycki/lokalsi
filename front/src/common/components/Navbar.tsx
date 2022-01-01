import React from 'react'
import AddRideModal from "../../rides/components/AddRideModal";

export interface NavbarProps {
}

export interface NavbarActionProps {
}


const Navbar: React.FC<NavbarProps & NavbarActionProps> = (props) => {

    return (
        <nav className="navbar navbar-expand-md">
            <a className="navbar-brand mx-auto" href="#">
                <span className="navbar-logo">lokalsi.cc</span>
            </a>
            <div className="me-sm-5 ms-sm-0 me-auto ms-auto">
                <AddRideModal />
            </div>
        </nav>
    )
}

export default Navbar