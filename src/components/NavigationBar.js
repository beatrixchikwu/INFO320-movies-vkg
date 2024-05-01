import React from "react";
import { NavLink } from 'react-router-dom';
import '../styles.css';

function NavigationBar () {
    return (
        <div className="navbar-container">
            <h1 className='header'>Explore our Movie Knowledge Graph</h1>
            <ul className="navbar-menu">
                <li><NavLink exact to="/" activeClassName="active-link">Movies</NavLink></li>
                <li><NavLink to="/actor" activeClassName="active-link">Actor</NavLink></li>
                <li><NavLink to="/query-entry" activeClassName="active-link">Query Entry</NavLink></li>
            </ul>
        </div>
    )
}

export default NavigationBar;