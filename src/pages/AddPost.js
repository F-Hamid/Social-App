import React, { useState } from "react";

import DefaultLayout from "./../components/DefaultLayout";
// Firebase
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { fireDb} from "./../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addPost = () => {
    dispatch({ type: "showLoading" });
    const storage = getStorage();
    const storageRef = ref(storage, `/posts/${image.name}`);

    // FireBase Storage
    uploadBytes(storageRef, image)
      .then((snapshot) => {
        getDownloadURL(storageRef)
          .then((url) => {
            addDoc(collection(fireDb, "posts"), {
              description,
              imageURL: url,
              likes: [],
              comments: [],
              user: JSON.parse(localStorage.getItem("social-app- user")),
            }).then(() => {
              toast.success("Post created successefully!");
              dispatch({ type: "hideLoading" });
              navigate("/");
            });
            dispatch({ type: "hideLoading" });
          })
          .catch((error) => {
            toast.error("Something went wrong!");
            console.log(error);
            dispatch({ type: "hideLoading" });
          });
      })
      .catch((error) => {
        toast.error("Image not Uploaded");
        console.log(error);
      });
  };

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <DefaultLayout>
      <>
        <h1 className="text-3xl text-gray-600 font-semibold">Add New Post</h1>
        <div className="w-1/1 flex flex-col">
          {image && (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src={URL.createObjectURL(image)}
              alt=" Please Select a valid image source!"
              className="mt-5 h-72 w-72 rounded"
            />
          )}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-dashed border-greay-500 w-1/2 md:w-full my-5 p-5  "
            rows={5}
          ></textarea>
          <input onChange={(e) => onImageChange(e)} type={"file"} />
          {description && image && (
            <button
              onClick={addPost}
              className=" bg-color-primary w-32 hover:bg-color-third
          text-white rounded-sm mr-3 mt-5  px-6 py-1"
            >
              Add Post
            </button>
          )}
        </div>
      </>
    </DefaultLayout>
  );
}

export default AddPost;
