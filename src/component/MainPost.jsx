import "./MainPost.css";
// import { data } from "./data.jsx";
import { useState, React, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function MainPost() {
  // const navigator=Navigate()
  // if(data)
  // {
  // 	navigator("/post/")
  // }
  const [stateData, setStateData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loder, setLoder] = useState(false);
  const handleDelete = (index) => {
    setSelectedPost(index);
  };
  const confirmDelete = () => {
    const updatedStateData = [...stateData];
    updatedStateData.splice(selectedPost, 1);
    setStateData(updatedStateData);
    console.log(selectedPost);
  };
  useEffect(() => {
    setLoder(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setStateData(res.data.slice(0, 10)))
      .finally(() => {
        setLoder(false);
      });
  }, []);

  return (
    <>
      {loder === true ? (
        <div>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        </div>
      ) : (
        <section className="container mt-5">
          <h2 className="text-center mb-4">Posts</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {stateData.map((item, index) => (
              <div key={index} className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Post {item.id}</h5>
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">{item.body}</p>
                  </div>
                  {/* <input type="text" value={item.id} /> */}
                  <div className="card-footer d-flex justify-content-end">
                    <Link
                      to={`/post/${item.id}`}
                      className="btn btn-primary me-2"
                    >
                      Read more
                    </Link>

                    <>
                      {/* Button to Open the Modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                      {/* The Modal */}
                      <div className="modal" id="myModal">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                              <h4 className="modal-title">Modal Heading</h4>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                              />
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                              <h2>Are you sure to want to delete this post</h2>
                              <button
                                data-bs-dismiss="modal"
                                className="btn btn-danger"
                                onClick={() => confirmDelete()}
                              >
                                Delete
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger m-3"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer"></div>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default MainPost;
