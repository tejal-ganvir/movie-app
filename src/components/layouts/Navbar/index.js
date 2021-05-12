import React from 'react';
import { Link } from 'react-router-dom';


/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header text-light">
            <Link to={'/'} >MovieSeriesInfo</Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fa fa-imdb fa-4x" id="imdb-logo" />
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fa fa-snowflake-o fa-4x" id="react-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
   )

 }

export default Navbar