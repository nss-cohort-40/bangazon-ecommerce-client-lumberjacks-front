import React, {useState} from 'react';
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'

const Ecommerce = () => {

  const [loggedIn, setLoggedIn] = useState(false)

  const isAuthenticated = () =>
      loggedIn || localStorage.getItem("bangazon_token") !== null

  return (
    <>
      <NavBar loggedIn={loggedIn}/>
      <ApplicationViews loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    </>
  );
};

export default Ecommerce;