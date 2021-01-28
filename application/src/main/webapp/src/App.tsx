import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import RidesContainer from "./ride/containers/RidesContainer";

const ridesComponent: React.ComponentType = RidesContainer

export interface AppDispatchProps {

}

export interface AppProps {

}

const App: React.FunctionComponent<AppProps> = () => {
    return (
        <BrowserRouter>
            <>
                <Route path="/" exact component={ridesComponent}/>
            </>
        </BrowserRouter>
    );
}

export {App}
