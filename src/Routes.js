import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import DogList from "./DogList";
import DogDetails from "./DogDetails";


function Routes ({allDogInfo}) {

    return (
        <Switch>
            <Route exact path="/dogs">
                <DogList allDogInfo={allDogInfo}/>
            </Route>

            <Route path="/dogs/:name">
                <DogDetails allDogInfo={allDogInfo}/>
            </Route>

            <Redirect to="/dogs"/>
        </Switch>
    );
}


export default Routes;
