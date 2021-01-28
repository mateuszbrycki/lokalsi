import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import RidesContainer from "./ride/containers/RidesContainer";
import UserContainer from "./user/containers/UserContainer";

const ridesComponent: React.ComponentType = RidesContainer
const userComponent: React.ComponentType = UserContainer

export interface AppDispatchProps {

}

export interface AppProps {

}

const App: React.FunctionComponent<AppProps> = () => {
    return (
        <BrowserRouter>
            <>
                <Route path="/" exact component={ridesComponent}/>
                <Route path="/user" exact component={userComponent}/>
            </>
        </BrowserRouter>
    );
}

export {App}
