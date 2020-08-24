import { Route } from "react-router-dom";
import React from "react";
import NavBar from "./nav/NavBar"

const ApplicationViews = () => {
    return <Route exact path='/' render={NavBar}>
    }