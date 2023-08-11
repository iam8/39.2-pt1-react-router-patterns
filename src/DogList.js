import React from "react";
import { Link } from "react-router-dom";

import "./DogList.css";


function DogList ({allDogInfo}) {
    return (
        <div className="DogList">
            <h1 className="DogList-heading">AVAILABLE DOGS</h1>

            <div className="DogList-list">
                <ul>
                    {allDogInfo.map(dog => {
                        return (
                            <li key={dog.name}>
                                <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>

                                <div>
                                    <img className="DogList-img" src={dog.src} alt={dog.name}/>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

        </div>
    )
}


export default DogList;
