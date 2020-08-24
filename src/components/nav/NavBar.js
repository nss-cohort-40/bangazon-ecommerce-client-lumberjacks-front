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
                <Link className="nav-link" to="/"> Products </Link>
            </li>
            <li>
                <Link className="nav-link" to="/categories"> Product Categories </Link>
            </li>
            <li>
                <Link className="nav-link" to="/sell"> Sell Product </Link>
            </li>
            <li>
                <Link className="nav-link" to="/shopping-cart"> Shopping Cart </Link>
            </li>
            <li>
                <Link className="nav-link" to="/profile"> Profile </Link>
            </li>
            <li>
                <Link className="nav-link" to="/login">Login</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;