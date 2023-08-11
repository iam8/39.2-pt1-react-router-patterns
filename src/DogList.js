import React from "react";
import { Link } from "react-router-dom";

import "./DogList.css";


function DogList ({allDogInfo}) {
    return (
        <div className="DogList">
            <h1 className="DogList-heading">AVAILABLE DOGS</h1>

            <div className="DogList-list">
                {allDogInfo.map(dog => {
                    return (
                        <div className="DogList-card" key={dog.name}>
                            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                                {dog.name}
                                <img
                                    className="DogList-img"
                                    src={dog.src}
                                    alt={`${dog.name} the dog`}
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}


export default DogList;
