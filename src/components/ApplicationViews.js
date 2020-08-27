import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
import NewProduct from "./product/NewProduct"
import ProductCategories from "./product/ProductCategories"
import Profile from "./account/Profile"
import ProductList from './product/ProductList'
import PayTypeForm from './account/PayTypeForm'


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
                exact path="/sell" render={props => {
                    return <NewProduct {...props} />
                }}
            />  
            <Route
                exact path="/product-categories" render={props => {
                    return <ProductCategories {...props} />
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

        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)
