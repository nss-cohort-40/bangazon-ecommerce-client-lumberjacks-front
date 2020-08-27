import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {

    const logout = () => {
        props.setLoggedIn(false)
        localStorage.removeItem("bangazon_token")
    }

  return (
    <header>
        <nav>
            <ul className="container">
            {props.loggedIn
            ? <li>
                <input type="text"></input>
            </li>
            : null}
            <li>
                <Link className="nav-link" to="/"> Products </Link>
            </li>
            <li>
                <Link className="nav-link" to="/product-categories"> Product Categories </Link>
            </li>
            {props.loggedIn
            ? 
            <li>
                <Link className="nav-link" to="/sell"> Sell Product </Link>
            </li>
            : null}
            {props.loggedIn
            ? <li>
                <Link className="nav-link" to="/products/cart"> Shopping Cart </Link>
            </li>
            : null}
            {props.loggedIn
            ? <li>
                <Link className="nav-link" to="/profile"> Profile </Link>
            </li>
            : null}
            {props.loggedIn
            ? <li>
                <Link className="nav-link" onClick={logout}>Log out</Link>
              </li>
            : <li>
                <Link className="nav-link" to="/login">Login</Link>
              </li>}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;