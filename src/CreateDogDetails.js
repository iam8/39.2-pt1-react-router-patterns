import React from "react";
import { useParams, Redirect } from "react-router-dom";
import DogDetails from "./DogDetails";


/**
 * Search for information in 'allDogInfo' for the dog specified by the URL 'name' param.
 * If found, create and return a DogDetails component with this info.
 *
 * Redirect to homepage if no matching dog info is found.
 */
function CreateDogDetails({allDogInfo}) {
    const {name} = useParams();
    const dog = allDogInfo.find(dog => dog.name.toLowerCase() === name.toLowerCase());

    if (!dog) {
        return <Redirect to="/dogs"/>;
    }

    return <DogDetails dog={dog}/>
}


export default CreateDogDetails;
