import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import Post from "../components/Post";
import { collection, getDocs } from "firebase/firestore";
import { fireDb } from "./../firebaseConfig";
import { useDispatch } from "react-redux";

function Home() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    dispatch({ type: "showLoading" });
    const querySnapshot = await getDocs(collection(fireDb, "posts"));

    const temp = [];
    querySnapshot.forEach((doc) => {
      temp.push({ ...doc.data(), id: doc.id });
    });
    setData(temp);

    dispatch({ type: "hideLoading" });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <DefaultLayout>
      <div className="grid grid-cols-4 md:grid-cols-1">
        {data.map((post) => {
          return <Post post={post} />;
        })}
      </div>
    </DefaultLayout>
  );
}

export default Home;
