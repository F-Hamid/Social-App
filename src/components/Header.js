import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { CgMenuRight } from "react-icons/cg";
import { SiHomeadvisor } from "react-icons/si";
import { MdLibraryAdd } from "react-icons/md";
import { ImShare } from "react-icons/im";
import { BsPersonCircle } from "react-icons/bs";

const Header = () => {
  const location = useLocation();
  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: <SiHomeadvisor />,
    },
    {
      title: "Add Post",
      path: "/addpost",
      icon: <MdLibraryAdd />,
    },
    {
      title: "shares",
      path: "/shares",
      icon: <ImShare />,
    },
    {
      title: "profile",
      path: "/profile",
      icon: <BsPersonCircle />,
    },
  ];
  return (
    <div className="p-5 relative class  bg-color-primary w-[8rem] shadow-lg  ">
      <div className="h-1/1 text-[3rem] flex flex-col justify-start items-center p-5  ">
        {/* <div className="relative flex flexc items-center justify-center h-12 w-12 ùt-2 mb-2 mx-auto shadow-lg "> */}
        {menuItems.map(({ path, title, icon }) => {
          return (
            <div className="flex justify-center p-5 relative group">
              <Link
                to={path}
                className={`text-gray-200 mb-10 px-3 py-3 w-42rem] hover:bg-gray-100 hover:text-gray-500 hover:rounded-3xl translate-all duration-500 ease-linear cursor-pointer   ${
                  path === location.pathname &&
                  "text-color-text   shadow-gray-300 shadow-lg rounded-2xl  "
                }`}
              >
                {icon}
              </Link>
              <span className="absolute w-auto p-3 m-3  min-w-max left-28 rounded-md shadow-md text-color-extra bg-color-text text-[1rem] font-bold transition-all duration-100 scale-0  origin-left group-hover:scale-100">
                {title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
