import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Start from './pages/index';
import Slider from './pages/slider';

export default function App() {
    return (
      <Router>
          <Switch>
            <Route path="/slider">
                <Slider />
            </Route>
            <Route path="/">
                <Start />
            </Route>
          </Switch>
      </Router>
    );
}