import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MainPost.css";
import CircularProgress from "@mui/material/CircularProgress";
import "bootstrap/dist/css/bootstrap.min.css";

function MainPost() {
  const [stateData, setStateData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [start, setStart] = useState(0);
  const [limit] = useState(10);

  const handleDelete = (index) => {
    setSelectedPost(index);
  };

  const confirmDelete = () => {
    const postIdToDelete = stateData[selectedPost].id;
    setLoading3(true);
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`)
      .then((response) => {
        if (response.status === 200) {
          const updatedStateData = [...stateData];
          updatedStateData.splice(selectedPost, 1);
          setStateData(updatedStateData);
        } else {
          console.error("Error deleting post. Status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      })
      .finally(() => {
        setLoading3(false);
        setSelectedPost(null);
      });
  };

  const cancelDelete = () => {
    setSelectedPost(null);
  };

  const handleNext = () => {
    setLoading2(true);
    setStart(start + limit);
  };

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
      )
      .then((response) => {
        let updatedStateData = stateData.concat(response.data);
        setStateData(updatedStateData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    setLoading(false);
    setLoading2(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  return (
    <>
      <section className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="text-center mb-4">Posts</h2>
          <Link to="/AddPost" className="btn btn-success">
            Add Post
          </Link>
        </div>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <CircularProgress
              style={{ color: "blue", height: 100, width: 100 }}
            />
          </div>
        ) : (
          <div>
            {stateData.map((item, index) => (
              <div key={index} className="row my-5">
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">Post {item.id}</h5>
                      <p className="card-text">{item.title}</p>
                      <p className="card-text">{item.body}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                      <Link to={`/post/${item.id}`} className="btn btn-primary">
                        Read more
                      </Link>
                      <div>
                        <Link
                          to={`/Editpost/${item.id}`}
                          className="btn btn-primary me-2"
                        >
                          Edit Post
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    {selectedPost === index && (
                      <div className="confirmation-div">
                        <p>Are you sure you want to delete this post?</p>
                        <button
                          className="btn btn-danger"
                          onClick={confirmDelete}
                        >
                          Confirm
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={cancelDelete}
                        >
                          Cancel
                        </button>
                        {loading3 && (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginTop: "20px",
                            }}
                          >
                            <CircularProgress style={{ color: "blue" }} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="confirmation-div mb-5">
              <button onClick={handleNext} className="btn btn-secondary">
                Next
              </button>
              {loading2 && (
                <div
                  style={{
                    display: "inline-block",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress style={{ color: "blue" }} />
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default MainPost;
