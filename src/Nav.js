import React from "react";
import { NavLink } from "react-router-dom";


function Nav ({names}) {
    return (
        <nav className="Nav">
            {
                names.map((name) => {
                    return (
                        <NavLink exact to={`/dogs/${name.toLowerCase()}`}>{name}</NavLink>
                    );
                })
            }
        </nav>
    );
}


export default Nav;
