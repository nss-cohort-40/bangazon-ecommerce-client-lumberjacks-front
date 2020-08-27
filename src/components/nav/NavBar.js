import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {

    const { handleProductSearch } = props;

    const search = useRef()

  return (
    <header>
        <nav>
            <ul className="container">
                <li>
                    <form className="product-search-form" onSubmit={(e) => {
                        e.preventDefault()
                        handleProductSearch(search)
                    }}>
                        <input ref={search} className="product-search-input" type="search" placeholder="Search" aria-label="Search" />
                        <button className="search-submit-button" type="submit">Search</button>
                    </form>
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