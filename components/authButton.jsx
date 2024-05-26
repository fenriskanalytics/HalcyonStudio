import React, { useState, useEffect } from 'react';
import MarianaIntegration from './MarianaIntegration'; // Adjust the path as necessary

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check the authentication status (example using localStorage, replace with actual auth logic)
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  return (
    <MarianaIntegration
      path="/account"
      login={!isLoggedIn}
      loggedInText="My Account"
      loggedOutText="Login"
    />
  );
};

export default AuthButton;
