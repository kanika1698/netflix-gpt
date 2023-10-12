import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [signUp, setSignUp] = useState(false);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Cover"
        />
      </div>
      <form className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {signUp ? "Sign Up" : "Sign In"}
        </h1>

        {signUp && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {signUp ? "Sign Up" : "Sign In"}
        </button>
        <p class="py-3 cursor-pointer" onClick={() => setSignUp(!signUp)}>
          {
            signUp ? "Already Registered? Sign In Now.":"New to Netflix? Sign Up Now"
          } 
        </p>
      </form>
    </div>
  );
}

export default Login;
