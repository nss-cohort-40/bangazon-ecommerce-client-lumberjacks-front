import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {

  return (
    <header>
        <nav>
            <ul className="container">
            <li>
                <input type="text"></input>
            </li>
            <li>
                <span className="nav-link" to="/"> Products </span>
            </li>
            <li>
                <span className="nav-link" to="/categories"> Product Categories </span>
            </li>
            <li>
                <span className="nav-link" to="/sell"> Sell Product </span>
            </li>
            <li>
                <span className="nav-link" to="/shopping-cart"> Shopping Cart </span>
            </li>
            <li>
                <span className="nav-link" to="/profile"> Profile </span>
            </li>
            <li>
                <span className="nav-link" to="/login">Login</span>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;