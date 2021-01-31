import React from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import RidesContainer from "./ride/containers/RidesContainer";
import ProfileContainer from "./user/containers/UserContainer";
import AuthorizationContainer from "./user/containers/AuthorizationContainer";

export interface AppActionsProps {
}

export interface AppProps {
    readonly isUserLoggedIn: boolean;
}

const App: React.FunctionComponent<AppProps> = (props) => {
    const {isUserLoggedIn} = props

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">lokalsi.cc</a>

                {isUserLoggedIn ? <Link to={"/profile"} className="nav-link">Profile</Link> : <></>}
            </nav>
            <div className="container-fluid">
                <Switch>
                    <Route exact path={["/", "/home"]}>
                        {isUserLoggedIn ? <RidesContainer/> : <AuthorizationContainer/>}
                    </Route>
                    <Route exact path="/profile">
                        {isUserLoggedIn ? <ProfileContainer/> : <Redirect to="/"/>}
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export {App}
