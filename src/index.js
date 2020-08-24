import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import Ecommerce from './components/Ecommerce';


ReactDOM.render(
  <Router>
    <Ecommerce />
  </Router>,
  document.getElementById('root')
);
