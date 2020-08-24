import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import Login from './components/auth/Login'
import ApplicationViews from './components/ApplicationViews';


ReactDOM.render(
  <Router>
      <ApplicationViews />
  </Router>,
  document.getElementById('root')
)