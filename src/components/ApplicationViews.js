import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
import ProductCategories from "./product/ProductCategories"
import ProductList from './product/ProductList';

const ApplicationViews = (props) => {
    return (
        <React.Fragment>

            <Route
                exact path="/" render={props => {
                    return <ProductList {...props} />
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
                exact path="/product-categories" render={props => {
                    return <ProductCategories {...props} />
                }}
            />   
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)
