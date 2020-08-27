import { Route } from "react-router-dom"
import React, { useState } from "react"
import { withRouter } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
import NewProduct from "./product/NewProduct"
import ProductCategories from "./product/ProductCategories"
import OrderDetails from "./order/OrderDetails"
import Profile from "./account/Profile"
import ProductList from './product/ProductList'
import PayTypeForm from './account/PayTypeForm'
import NavBar from './nav/NavBar'
import dataManager from '../modules/dataManager';


const ApplicationViews = (props) => {
    const [searchArr, setSearchArr] = useState([])

    const handleProductSearch = (search) => {
        const searchParam = search.current.value;
        dataManager.getByProperty('products', 'title', searchParam)
          .then((response) => {
              setSearchArr(response);
              props.history.push("/");
          })
          .catch((err) => console.error('There was an issue with searching for a product:', err));
    }

    return (
        <React.Fragment>
            <NavBar handleProductSearch={handleProductSearch} />
            <Route
                exact path="/" render={props => {
                    return <ProductList searchArr={searchArr} {...props} />
                }}
            />

            <Route
                exact path="/register" render={props => {
                    return <Register {...props} />
                }}
            />

            <Route
                exact path="/login" render={props => {
                    return <Login {...props} />
                }}
            />
            <Route
                exact path="/sell" render={props => {
                    return <NewProduct {...props} />
                }}
            />  
            <Route
                exact path="/product-categories" render={props => {
                    return <ProductCategories isSingle={false} {...props} />
                }}
            />

            <Route
                exact path="/profile" render={props => {
                    return <Profile {...props}/>
                }}
            />

            <Route
                exact path="/add-payment" render={props => {
                    return <PayTypeForm {...props}/>
                }}
            />

            <Route
                path="/producttypes/:product_type_id" render={props => {
                    return <ProductCategories isSingle={true} {...props} />
                }}
            />
            <Route
                exact path="/products/cart" render={props => {
                    return <OrderDetails {...props} />
                }}
            />  
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)
