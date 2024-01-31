import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./data.jsx";

const Details = () => {
  const { id } = useParams();
  const Post = data.find((post) => post.id === parseInt(id));

  return (
    <>
      <div className="container">
        <div className="card mb-3" key={Post.id}>
          <div className="card-body">
            <h3 className="card-title">{Post.title}</h3>
            <p className="card-text text-black">{Post.body}</p>
            <p className="card-text text-black">{Post.id}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
