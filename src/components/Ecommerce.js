import React, {useState} from 'react';
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'

const Ecommerce = () => {

  const isAuthenticated = () =>
    localStorage.getItem("bangazon_token") !== null

  const [loggedIn, setLoggedIn] = useState(isAuthenticated())

  const logout = () => {
      setLoggedIn(false)
      localStorage.removeItem("bangazon_token")
  }

  return (
    <>
      <NavBar loggedIn={loggedIn} logout={logout} setLoggedIn={setLoggedIn}/>
      <ApplicationViews loggedIn={loggedIn}/>
    </>
  );
};

export default Ecommerce;