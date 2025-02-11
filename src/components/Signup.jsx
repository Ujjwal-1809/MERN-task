import React from "react";
import loginImg from "../assets/loginImg.svg";

const Signup = ({ setIsSignupOpen, setShowSignup }) => {
  return (
    <div className="items-end sm:items-center fixed inset-0 flex justify-center bg-black/40 z-10">
      <div className="w-full h-[65vh] sm:h-[74%] sm:w-[50%] bg-white rounded-lg shadow-lg relative">
        {/* Close Modal */}
        <button
          onClick={() => setIsSignupOpen(false)}
          className="top-0 right-0 sm:right-[-3%] sm:top-[-4.5%] absolute text-gray-500 cursor-pointer"
        >
          <i className="fa-solid fa-circle-xmark text-2xl"></i>
        </button>

        <h2 className="hidden sm:text-xs text-center text-green-800 font-semibold bg-green-100 h-11 p-3">
          Let's learn, share and inspire each other with our passion for computer engineering, Sign up now &#129304;
        </h2>

        <div className="w-full flex p-6">
          {/* Left Side */}
          <div className="w-full sm:w-[50%] flex flex-col gap-y-3.5">
            <h1 className="text-xl font-bold">Create Account</h1>
            <div>
              <div className="flex">
                <input type="text" placeholder="First Name" className="bg-slate-100 border border-slate-300 p-2 w-full" />
                <input type="text" placeholder="Last Name" className="bg-slate-100 border border-slate-300 p-2 w-full" />
              </div>
              <input type="text" placeholder="Email" className="bg-slate-100 border border-slate-300 p-2 w-full" />
              <input type="text" placeholder="Password" className="bg-slate-100 border border-slate-300 p-2 w-full" />
              <input type="text" placeholder="Confirm Password" className="bg-slate-100 border border-slate-300 p-2 w-full" />
            </div>
            <button className="text-white bg-blue-500 w-full rounded-4xl p-1.5 cursor-pointer">Sign Up</button>

            <div className="flex flex-col gap-y-1.5">
              <button className="w-full border border-slate-300 p-1.5 text-sm cursor-pointer"><i className="fa-brands fa-facebook"></i> Sign Up with Facebook</button>
              <button className="w-full border border-slate-300 p-1.5 text-sm cursor-pointer"><i className="fa-brands fa-google"></i> Sign Up with Google</button>
            </div>
            <p className="text-center text-sm sm:hidden">By signing up, you agree to our terms and conditions, Privacy policy</p>
          </div>

          {/* Right Side */}
          <div className="hidden sm:flex w-[50%] flex-col gap-y-2.5">
            <h2 className="text-xs text-center">
              Already have an account?
              <span
                className="cursor-pointer font-semibold text-blue-500"
                onClick={() => setShowSignup(false)} // Toggle to Login
              >
                &nbsp; Sign in
              </span>
            </h2>
            <img src={loginImg} alt="" />
            <p className="text-[9px] text-end text-slate-600">By signing up, you agree to our terms and conditions, Privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
