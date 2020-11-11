import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Main from './pages/main';
import Slider from './pages/slider';

export default function App() {
    return (
      <Router>
          <Switch>
            <Route path="/slider">
                <Slider />
            </Route>
            <Route path="/">
                <Main />
            </Route>
          </Switch>
      </Router>
    );
}