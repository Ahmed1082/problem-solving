import React, { useEffect, useState } from "react";
import Postcard from "../../components/PostCard";
import Loading from "../../components/Loading";
import "../../styles/posts.css";

export default function Posts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (res.status !== 200) {
        setData([]);
      } else {
        const finalres = await res.json();
        setData(finalres);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="PostContainer">
      {loading && <Loading />}
      {data?.map((Posts) => (
        <Postcard
          key={Posts.id}
          title={Posts.title}
          price={Posts.price}
          id={Posts.id}
          img={Posts.image}
          description={Posts.description} 
        />
      ))}
    </div>
  );
}
