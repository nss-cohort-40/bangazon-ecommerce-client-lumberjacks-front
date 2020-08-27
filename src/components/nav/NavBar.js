import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {

    const search = useRef()

    const handleProductSearch = () => {
        console.log(search.current.value);
    }

  return (
    <header>
        <nav>
            <form className="product-search-form" onSubmit={handleProductSearch}>
                <input ref={search} className="product-search-input" type="search" placeholder="Search" aria-label="Search" />
                <button className="search-submit-button" type="submit">Search</button>
            </form>
            <ul className="container">
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
                    <span className="nav-link" to="/shopping-cart"> Shopping Cart </span>
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