import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import DogList from "./DogList";
import CreateDogDetails from "./CreateDogDetails";


function Routes ({allDogInfo}) {

    return (
        <Switch>
            <Route exact path="/dogs">
                <DogList allDogInfo={allDogInfo}/>
            </Route>

            <Route exact path="/dogs/:name">
                <CreateDogDetails allDogInfo={allDogInfo} />
            </Route>

            <Redirect to="/dogs"/>
        </Switch>
    );
}


export default Routes;
