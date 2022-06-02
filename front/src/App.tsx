import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRidesContainer from "./rides/containers/AllRidesContainer";
import Footer from "./common/components/Footer";
import Navbar from "./common/components/Navbar";
import CookiesPopup from "./common/components/Cookies";
import FanpageModal from "./common/components/FanpageModal";

export interface AppActionsProps {
}

export interface AppProps {
}


const App: React.FunctionComponent<AppProps & AppActionsProps> = (props) => {

    return (
        <>
            <Navbar/>
            <AllRidesContainer/>
            <Footer/>
            <CookiesPopup/>
            <FanpageModal />
        </>
    );
}

export default App;
