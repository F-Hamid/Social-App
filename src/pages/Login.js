import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      {/* Top Shape */}
      <div className="w-screen flex items-start">
        <div className="h-40 bg-color-primary flex-center w-96 clip-1">
          <h1 className="text-5xl font-semibold text-white uppercase">Social</h1>
        </div>
      </div>
      {/* Form */}
      <div className="card w-[35rem] flex-col p-6 space-y-5 rounded-sm">
        <h1 className="text-color-text text-2xl font-semibold pl-2">LogIn</h1>
        <hr />
        <input
          type="text"
          placeholder="email"
          className="border border-gray-200 h-10 rounded-sm w-[98%] focus:border-secondary pl-2"
        />
        <input
          type="text"
          placeholder="password"
          className="border border-gray-200 
          focus:border-secondary h-10 rounded-sm w-[98%]    pl-2"
        />
        <div className="flex justify-end">
          <button
            className=" bg-color-primary  hover:bg-color-third
          text-white rounded-sm mr-3  px-6 py-1"
          >
            Login
          </button>
        </div>
        <hr />
        <Link to="/register" className="text-xs text-color-text pl-2">
          Create New Account!
        </Link>
      </div>
      {/* Bottom Shape */}
      <div className="w-screen flex flex-col items-end">
        <div className="h-40 bg-color-primary flex-center w-96 clip-2">
          <h1 className="text-5xl text-white font-semibold uppercase ">App</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
