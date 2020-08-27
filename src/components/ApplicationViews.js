import { Route, Redirect } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
import NewProduct from "./product/NewProduct"
import ProductCategories from "./product/ProductCategories"
import OrderDetails from "./order/OrderDetails"
import Profile from "./account/Profile"
import ProductList from './product/ProductList'
import PayTypeForm from './account/PayTypeForm'


const ApplicationViews = (props) => {

    const hasUser = props.hasUser
    const setUser = props.setUser

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
                    return <Login {...props} hasUser={hasUser}/>
                }}
            />
            <Route
                exact path="/sell" render={props => {
                    if (props.loggedIn) {
                    return <NewProduct {...props} />
                } else {
                    return <Redirect to='/login' />
                }}}
            />  
            <Route
                exact path="/product-categories" render={props => {
                    return <ProductCategories isSingle={false} {...props} />
                }}
            />

            <Route
                exact path="/profile" render={props => {
                    if (props.loggedIn) {
                    return <Profile {...props}/>
                } else {
                    return <Redirect to='/login' />
                }}}
            />

            <Route
                exact path="/add-payment" render={props => {
                    if (props.loggedIn) {
                    return <PayTypeForm {...props}/>
                } else {
                    return <Redirect to='/login' />
                }}}
            />

            <Route
                path="/producttypes/:product_type_id" render={props => {
                    return <ProductCategories isSingle={true} {...props} />
                }}
            />
            <Route
                exact path="/products/cart" render={props => {
                    if (props.loggedIn) {
                    return <OrderDetails {...props} />
                } else {
                    return <Redirect to='/login' />
                }}}
            />  
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)
