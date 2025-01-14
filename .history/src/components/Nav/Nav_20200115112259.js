import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Info from "../Info/Info";
import Gallery from "../Gallery/Gallery";
import Music from '../Music/Music';


const Nav = () => {
    return (
        <div className="nav--container">
            <Router>
                <Link to="/slider">Gallery</Link>
                <Link to={Info()}>Info</Link>
                <Link to={Music()}>Music</Link>

            </Router>
        </div>
    )
}
export default Nav;
