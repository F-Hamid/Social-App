import React from "react";
import { BsHeartHalf, BsChatRightTextFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Post({ post }) {
  const navigate = useNavigate();

  const getUserName = () => {
    const email = post.user.email;
    const userName = email.slice(0, 10);
    return userName;
  };
  getUserName();
  return (
    <div
      onClick={() => navigate(`/post/${post.id}`)}
      className="flex-center flex-col cursor-pointer  border m-2 card"
    >
      <div className=" w-full flex justify-start p-2  bg-color-primary  items-center border ">
        <div className="flex-center  mx-3  w-12 h-12 bg-color-text rounded-full text-white font-semibold uppercase ">
          <span className="text-2xl  ">{getUserName()[0]}</span>
        </div>
        <h1 className="text-2xl font-semibold">{getUserName()}</h1>
      </div>
      <div className="w-full flex-center m-8 ">
        <img src={post.imageURL} alt="post" className="h-60 w-60" />
      </div>
      <div className="flex card p-2 w-full card">
        <div className="flex-center m-3">
          <BsHeartHalf size={25} />
          <h1 className="mx-2">{post.likes.length}</h1>
        </div>
        <div className="flex-center m-3">
          <BsChatRightTextFill size={25} />
          <h1 className="mx-2">{post.comments.length}</h1>
        </div>
      </div>
    </div>
  );
}

export default Post;
