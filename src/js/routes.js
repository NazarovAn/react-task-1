import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Pages from './pages/index';

export default function routes() {
    return (
        <Router>
            <Switch>
                <Route path="/slider" component={Pages.Slider} />
                <Route path="/" component={Pages.Main} />
            </Switch>
        </Router>
    )
} 