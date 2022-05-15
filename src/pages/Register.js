import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// FireBase Auth
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { fireDb, app } from "./../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store);

  // Authentication
  const registerUser = (e) => {
    e.preventDefault();
    dispatch({ type: "showLoading" });

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          email: user.email,
          profilePicUrl: "",
          bio: "Hi I'm using Social App",
          // id: user.uid,
        };
        setDoc(doc(fireDb, "user", user.uid), userData);
        dispatch({ type: "hideLoading" });
        toast.success("Registration successfull");
        navigate("/login");
        // ...
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({ type: "hideLoading" });
        toast.error("Something Wrong");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("social-app- user")) {
      navigate("/");
      console.log("Login");
    }
  });

  return (
    <div className="h-screen flex bg-color-primary flex-col justify-between items-center">
      {/* Top Shape */}
      {loading && <Loader />}
      <div className="w-screen flex items-start">
        <div className="h-40 bg-white flex-center w-96 clip-1">
          <h1 className="text-5xl font-semibold text-color-primary  uppercase">Social</h1>
        </div>
      </div>
      {/* Form */}
      <form
        onSubmit={registerUser}
        className="card w-[35rem] border-color-secondary flex-col p-6 space-y-5 rounded-sm"
      >
        <h1 className="text-white text-2xl font-semibold pl-2">SingIn</h1>
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
        <input
          type="text"
          placeholder="confirm password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          className="border border-white-200 
          focus:border-secondary h-10 rounded-sm w-[98%]    pl-2"
        />
        <div className="flex justify-end">
          <button
            onClick={registerUser}
            className=" bg-color-secondary  hover:bg-color-third
          text-white rounded-sm mr-3  px-6 py-1"
          >
            Register
          </button>
        </div>
        <hr />
        <Link to="/login" className="text-xs  text-white pl-2 ">
          Already register? Click here to Login.
        </Link>
      </form>
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
