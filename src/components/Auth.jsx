import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const AuthModal = ({ setIsSignupOpen, setUserName }) => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {showSignup ? (
        <Signup setIsSignupOpen={setIsSignupOpen} setShowSignup={setShowSignup} />
      ) : (
        <Login setIsSignupOpen={setIsSignupOpen} setShowSignup={setShowSignup} setUserName={setUserName} />
      )}
    </>
  );
};

export default AuthModal;
