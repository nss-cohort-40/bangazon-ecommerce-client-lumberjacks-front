import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import NavBarSearchForm from './NavBarSearchForm';

const NavBar = () => {

  return (
    <header>
        <nav>
            <ul className="container">
                <li>
                    <NavBarSearchForm />
                </li>
                <li>
                    <Link className="nav-link" to="/"> Products </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/product-categories"> Product Categories </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/sell"> Sell Product </Link>
                </li>
                <li>
                    <Link className="nav-link" to="/products/cart"> Shopping Cart </Link>
                </li>
                <li>
                    <span className="nav-link" to="/profile"> Profile </span>
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