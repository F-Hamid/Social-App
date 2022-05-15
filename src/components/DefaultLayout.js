import React from "react";
import Header from "./Header";

function DefaultLayout(props) {
  return (
    <div className="flex h-screen   ">
      <Header />
      <div className="content m-10 p-5 border h-[90vh] w-[90vw] rounded-md">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
