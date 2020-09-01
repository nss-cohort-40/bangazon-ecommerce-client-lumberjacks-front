import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import NavBarSearchForm from './NavBarSearchForm';
import useSimpleAuth from "../../hooks / ui/useSimpleAuth"

const NavBar = props => {

    const { isAuthenticated, logout } = useSimpleAuth()

  return (
    <header>
        <nav>
            <ul className="container">
            {isAuthenticated()
            ? <li>
                <NavBarSearchForm />
            </li>
            : null}
            <li>
                <Link className="nav-link" to="/"> Products </Link>
            </li>
            <li>
                <Link className="nav-link" to="/product-categories"> Product Categories </Link>
            </li>
            {isAuthenticated()
            ? <li>
                <Link className="nav-link" to="/sell"> Sell Product </Link>
            </li>
            : null}
            {isAuthenticated()
            ? <li>
                <Link className="nav-link" to="/products/cart"> Shopping Cart </Link>
            </li>
            : null}
            {isAuthenticated()
            ? <li>
                <Link className="nav-link" to="/profile"> Profile </Link>
            </li>
            : null}
            {isAuthenticated()
            ? <li>
                <Link className="nav-link" to="/products/myproducts"> My Products </Link>
            </li>
            : null}
            {isAuthenticated()
            ? <li>
                <span className="nav-link" onClick={() => {
                    logout()
                    props.history.push('/')
                }}>Logout</span>
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