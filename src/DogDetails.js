import React from "react";
import { useParams } from "react-router-dom";


function DogDetails ({allDogInfo}) {
    const {name} = useParams();

    return (
        <div className="DogDetails">
            <h1>{name.toUpperCase()}</h1>

            Details on a dog go here
            {allDogInfo}
        </div>
    )
}


export default DogDetails;