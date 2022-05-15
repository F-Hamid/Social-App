import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddPost from "./pages/AddPost";
import Shares from "./pages/Shares";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRout>
                <Home />
              </ProtectedRout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/addpost"
            element={
              <ProtectedRout>
                <AddPost />
              </ProtectedRout>
            }
          />
          <Route
            path="/shares"
            element={
              <ProtectedRout>
                <Shares />
              </ProtectedRout>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRout>
                <Profile />
              </ProtectedRout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function ProtectedRout({ children }) {
  if (localStorage.getItem("social-app- user")) {
    console.log("children");
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
export default App;
