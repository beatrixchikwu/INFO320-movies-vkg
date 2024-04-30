import React from "react";
import NavigationBar from "../components/NavigationBar";
import ActorSearch from '../ActorSearch';
import { executeQuery } from "../App";
import '../styles.css';


function ActorPage () {
    return (
        <div>
            <NavigationBar/>
            <div>Actor Page</div>
            {/* <ActorSearch className="actor-search-field" onSubmit={executeQuery}/> */}
        </div>
    )

} 

export default ActorPage;