import React from 'react'
import AddRideModal from "../../rides/components/AddRideModal";

export interface NavbarProps {
}

export interface NavbarActionProps {
}


const Navbar: React.FC<NavbarProps & NavbarActionProps> = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md">

                <a className="navbar-brand mx-auto" href="#">
                    <h1 className="navbar-logo">lokalsi.cc</h1>
                </a>

                <div className="me-sm-5 ms-sm-0 me-auto ms-auto">
                    <AddRideModal/>
                </div>

            </nav>
        </header>
    )
}

export default Navbar