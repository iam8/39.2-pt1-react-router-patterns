import React from "react";

import "./DogDetails.css";


function DogDetails ({dog}) {

    return (
        <div className="DogDetails">
            <h1 className="DogDetails-heading">{dog.name}</h1>

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