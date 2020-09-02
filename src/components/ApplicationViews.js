import { Route, Redirect } from "react-router-dom"
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
import NavBar from './nav/NavBar'
import dataManager from '../modules/dataManager';
import useSimpleAuth from "../hooks / ui/useSimpleAuth"


const ApplicationViews = props => {

    const { isAuthenticated } = useSimpleAuth()

    const handleProductSearch = (search) => {
        const searchParam = search.current.value;
        dataManager.getByProperty('products', 'title', searchParam)
          .then((response) => {
              console.log(response);
          })
          .catch((err) => console.error('There was an issue with searching for a product:', err));
    }

    return (
        <React.Fragment>
            <NavBar handleProductSearch={handleProductSearch} {...props} />
            <Route
                exact path="/" render={props => {
                    return <ProductList {...props} />
                }}
            />

            <Route
                exact path="/products" render={props => {
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
                    if (isAuthenticated()) {
                    return <NewProduct {...props} />
                } else {
                    return <Redirect to='login' />
                }}}
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
                    if (isAuthenticated()) {
                    return <Profile {...props}/>
                } else {
                    return <Redirect to='login' />
                }}}
            />

            <Route
                exact path="/add-payment" render={props => {
                    if (isAuthenticated()) {
                    return <PayTypeForm {...props} />
                } else {
                    return <Redirect to='login' />
                }}}
            />

            <Route
                path="/producttypes/:product_type_id" render={props => {
                    return <ProductCategories isSingle={true} {...props} />
                }}/>
                
            <Route
                exact path="/products/cart" render={props => {
                    if (isAuthenticated()) {
                    return <OrderDetails {...props} />
                } else {
                    return <Redirect to='login' />
                }}}
            />  
        </React.Fragment>
        )
}

export default withRouter(ApplicationViews)
