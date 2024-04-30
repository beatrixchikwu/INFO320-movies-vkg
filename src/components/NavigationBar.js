import React from "react";
import '../styles.css';

function NavigationBar () {
    return (
        <div className="navbar-container">
            <h1 className='header'>Explore our Movie Knowledge Graph</h1>
            <ul className="navbar-menu">
                <li><a href="/">Movies</a></li>
                <li><a href="/actor">Actor</a></li>
            </ul>
        </div>
    )
}

export default NavigationBar;