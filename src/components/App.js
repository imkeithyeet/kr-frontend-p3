import { Switch } from "react-router-dom"
import { Route } from "react-router-dom";
import React from "react";
import Review from "./pages/Review";
import Home from "./pages/Home"
import About from "./pages/About";
import MenuItem from "./MenuItem";


function App() {
    return (
        <div className="app">
            <Switch>
                <Route path="/reviews">
                    <Review/>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/foods/:id">
                    <MenuItem />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
