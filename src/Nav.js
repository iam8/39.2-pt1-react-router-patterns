import React from "react";
import { NavLink } from "react-router-dom";


function Nav ({names}) {
    return (
        <div className="Nav">
            {names}
        </div>
    );
}


export default Nav;
