import React from 'react';
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'

const Ecommerce = () => {

  const [loggedIn, setLoggedIn] = useState(isAuthenticated())

  const isAuthenticated = () =>
      localStorage.getItem("bangazon_token") !== null

  return (
    <>
      <NavBar loggedIn={loggedIn}/>
      <ApplicationViews />
    </>
  );
};

export default Ecommerce;