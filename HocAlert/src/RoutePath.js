import React from 'react';
import Container from './Container'
import Toastify from './Toastify'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import './App.css';

const RoutePath = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/toastiy" component={Toastify} />
                    <Route path="/dashboard" exact component={Container} />
                    <Redirect to="/dashboard" />
                </Switch>
            </Router>
        </div>
    );

}
export default RoutePath