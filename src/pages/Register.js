import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="h-screen flex bg-color-primary flex-col justify-between items-center">
      {/* Top Shape */}
      <div className="w-screen flex items-start">
        <div className="h-40 bg-white flex-center w-96 clip-1">
          <h1 className="text-5xl font-semibold text-color-primary  uppercase">Social</h1>
        </div>
      </div>
      {/* Form */}
      <div className="card w-[35rem] border-color-secondary flex-col p-6 space-y-5 rounded-sm">
        <h1 className="text-white text-2xl font-semibold pl-2">SingIn</h1>
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
        <input
          type="text"
          placeholder="confirm password"
          className="border border-white-200 
          focus:border-secondary h-10 rounded-sm w-[98%]    pl-2"
        />
        <div className="flex justify-end">
          <button
            className=" bg-color-text  hover:bg-color-third
          text-white rounded-sm mr-3  px-6 py-1"
          >
            Register
          </button>
        </div>
        <hr />
        <Link to="/login" className="text-xs  text-white pl-2 ">
          Already register? Click here to Login.
        </Link>
      </div>
      {/* Bottom Shape */}
      <div className="w-screen flex flex-col items-end">
        <div className="h-40 bg-white flex-center w-96 clip-2">
          <h1 className="text-5xl text-color-primary  font-semibold uppercase ">App</h1>
        </div>
      </div>
    </div>
  );
}

export default Register;
