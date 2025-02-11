import React, { useState } from "react";
import logo from "../assets/ATGlogo.svg";
import Auth from "./Auth";
import userimg4 from "../assets/userimg4.jpeg"

const Navbar = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [userName, setUserName] = useState(""); // State to store user's name

  return (
    <>
      <nav className="md:flex sm:h-14 w-full justify-center items-center hidden">
        <img className="h-[50%] w-[10%]" src={logo} alt="My logo" />
        <div className="h-[59%] w-[29%] ml-[20%] mr-[20%] relative">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input
            className="h-full w-full rounded-3xl bg-slate-100 pl-10 pr-4"
            type="text"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>

        {/* Show Username if logged in, otherwise show "It's free!" */}
        <h3>
          {userName ? (
            <div className="font-bold cursor-pointer flex justify-center items-center gap-x-4">
              <img className="h-9 w-9 rounded-full object-cover" src={userimg4} alt="User" />
              <h2 className="font-normal">{userName}</h2>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          ) : (
            <div
              className="text-sm"
              onClick={() => setIsSignupOpen(true)}
            >Create account.
              <span className="text-blue-700 font-bold cursor-pointer ml-1.5 text-sm">It's free!</span> <i className="fa-solid fa-caret-down"></i>
            </div>
          )}
        </h3>
      </nav>

      {/* Pass setUserName to AuthModal so it can update the name on login */}
      {isSignupOpen && <Auth setIsSignupOpen={setIsSignupOpen} setUserName={setUserName} />}
    </>
  );
};

export default Navbar;
