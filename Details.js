import React from 'react'
import { NavLink } from "react-router-dom";
function Details() {
    return (
        <div>
            <p>Wearhouse details</p>
            <li>
                <a>
                    <NavLink exact activeClassName="active_class" to="/">
                        Wearhouse details
              </NavLink>
                </a>{" "}
            </li>


        </div>
    )
}

export default Details
