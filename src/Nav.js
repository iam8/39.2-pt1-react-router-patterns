import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";


function Nav ({names}) {
    return (
        <nav className="Nav">

            <NavLink exact to="/dogs">Home</NavLink>

            {
                names.map((name, index) => {
                    return (
                        <NavLink
                            key={index}
                            exact
                            to={`/dogs/${name.toLowerCase()}`}>
                                {name}
                        </NavLink>
                    );
                })
            }

        </nav>
    );
}


export default Nav;
