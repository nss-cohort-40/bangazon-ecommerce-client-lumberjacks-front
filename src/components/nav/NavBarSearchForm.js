import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavBarSearchForm = () => {
    const [searchParams, setSearchParams] = useState('');
    const queryPath = `/products?title=${searchParams}`;

    const searchParamsChange = e => {
        const inputValue = e.target.value;
        setSearchParams(inputValue);
    }

    return (
        <form className="product-search-form">
            <input onChange={searchParamsChange} className="product-search-input" type="search" placeholder="Search" aria-label="Search" />
            <Link to={queryPath}><button className="search-submit-button" type="button">Search</button></Link>
        </form>
    )
}

export default NavBarSearchForm;