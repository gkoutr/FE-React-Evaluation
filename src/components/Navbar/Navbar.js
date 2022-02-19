import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../../images/logos/noinc.png"; 
import { useSelector } from 'react-redux';
const Navbar = () => {

  const username = useSelector(state => state.user.userName);
    return (
        <nav className="nav">
        <div className="nav-container">
          <Link to="/" className='nav-logo'>
            <img src={logo} />
          </Link>
          <div className="nav-right-container">
            <ul className="navbar-right">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <span>|</span>
              <li className="nav-item">
                <Link className="nav-link" to="/interests">Interests</Link>
              </li>
              <span>|</span>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">Skills</Link>
              </li>
              <span>|</span>
              <li className="nav-item">
                <span className="nav-link">{username}</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;