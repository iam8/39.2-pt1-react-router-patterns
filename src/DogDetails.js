import React from "react";
import { useParams } from "react-router-dom";

import "./DogDetails.css";


function DogDetails ({allDogInfo}) {
    const {name} = useParams();

    // Get the matching dog
    const dog = allDogInfo.find(dog => dog.name.toLowerCase() === name);

    return (
        <div className="DogDetails">
            <h1 className="DogDetails-heading">{name.toUpperCase()}</h1>

            <div className="DogDetails-img-div">
                <img
                    className="DogDetails-img"
                    src={dog.src}
                    alt={`${dog.name} the dog`}
                />
            </div>

            <div className="DogDetails-info-text">
                <b>Age:</b> {dog.age}
            </div>

            <div className="DogDetails-info-text">
                <b>Facts:</b>
                <ul>
                    {
                        dog.facts.map((fact, index) => {
                            return (
                                <li key={index}>{fact}</li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}


export default DogDetails;