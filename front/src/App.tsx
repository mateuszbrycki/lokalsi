import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRidesContainer from "./rides/containers/AllRidesContainer";
import Footer from "./common/components/Footer";
import Navbar from "./common/components/Navbar";
import CookiesPopup from "./common/components/Cookies";

export interface AppActionsProps {
}

export interface AppProps {
}


const App: React.FunctionComponent<AppProps & AppActionsProps> = (props) => {

    return (
        <>
            <Navbar/>
            <div className="container mt-5">
                <AllRidesContainer/>
            </div>
            <Footer/>
            <CookiesPopup />
        </>
    );
}

export default App;
