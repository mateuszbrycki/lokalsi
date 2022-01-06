import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRidesContainer from "./rides/containers/AllRidesContainer";
import Footer from "./common/components/Footer";
import Navbar from "./common/components/Navbar";

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
        </>
    );
}

export default App;
