import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
// Login
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { fireDb, app } from "./../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loading } = useSelector((store) => store);
  const dispatch = useDispatch();

  const loginUser = (e) => {
    e.preventDefault();
    dispatch({ type: "showLoading" });
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        getDoc(doc(fireDb, "user", user.uid)).then((user) => {
          localStorage.setItem("social-app- user", JSON.stringify({ ...user.data(), id: user.id }));
          toast.success("Login successfull");
          dispatch({ type: "hideLoading" });
          navigate("/");
        });
        // ...
      })
      .catch((error) => {
        toast.error("Login failed");
        dispatch({ type: "hideLoading" });
      });
  };

  useEffect(() => {
    if (localStorage.getItem("social-app- user")) {
      navigate("/");
    }
  });

  return (
    <div className="h-screen flex flex-col justify-between items-center">
      {/* Loader */}
      {loading && <Loader />}
      {/* Top Shape */}
      <div className="w-screen flex items-start">
        <div className="h-40 bg-color-primary flex-center w-96 clip-1">
          <h1 className="text-5xl font-semibold text-white uppercase">Social</h1>
        </div>
      </div>
      {/* Form */}
      <form onSubmit={loginUser} className="card w-[35rem] flex-col p-6 space-y-5 rounded-sm">
        <h1 className="text-color-text text-2xl font-semibold pl-2">LogIn</h1>
        <hr />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-200 h-10 rounded-sm w-[98%] focus:border-secondary pl-2"
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-200 
          focus:border-secondary h-10 rounded-sm w-[98%]    pl-2"
        />
        <div className="flex justify-end">
          <button
            onClick={loginUser}
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
      </form>
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
