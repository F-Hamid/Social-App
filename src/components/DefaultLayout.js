import React from "react";
import { useSelector } from "react-redux";

import Header from "./Header";
import Loader from "./Loader";

function DefaultLayout(props) {
  const { loading } = useSelector((store) => store);
  return (
    <div className="flex h-screen   ">
      {loading && <Loader />}
      <Header />
      <div className="content m-10 p-5 border h-[90vh] w-[88vw] rounded-md">
        {props.children}
      </div>
    </div>
  );
}

export default DefaultLayout;
