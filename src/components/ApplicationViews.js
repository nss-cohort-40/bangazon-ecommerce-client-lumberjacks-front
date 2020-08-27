import { Route } from "react-router-dom"
import React from "react"
import { withRouter } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
import NewProduct from "./product/NewProduct"
import ProductCategories from "./product/ProductCategories"
import ProductDetails from './product/ProductDetail'
import OrderDetails from "./order/OrderDetails"
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
                    return <ProductCategories isSingle={false} {...props} />
                }}
            />
            
            <Route 
                exact path="/products/:productId(\d+)" render={props => {
                    return <ProductDetails {...props} productId={parseInt(props.match.params.productId)}/>
                }}/>

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
                }}/>
                
            <Route
                exact path="/products/cart" render={props => {
                    return <OrderDetails {...props} />
                }}
            />  
        </React.Fragment>
        )
}

export default withRouter(ApplicationViews)
