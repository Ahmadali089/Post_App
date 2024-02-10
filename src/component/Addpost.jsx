import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Addpost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const blog = { title, body, userId };
    // Check if body length meets the minimum requirement
    if (body.length < 500) {
      alert("Body must be at least 500 characters long");
      setLoading(false); // Stop loading
      return; // Prevent submission
    }
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { blog })
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          console.log("successfully data is added");
          setSuccessMessage("Blog is added successfully");
          // Reset form fields after successful submission
          setTitle("");
          setBody("");
          setUserId("");
        }
      });
    // Clear success message after 3 seconds
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
    // Validate title length
    if (title.length < 5) {
      alert("Title must be at least 5 characters long");
    }
    // Other validations for user ID
    if (userId % 1 === 0) {
      console.log("user id is whole number");
    } else {
      alert("user id is not a whole number");
    }
    if (userId > 0) {
      console.log("user id is positive");
    } else {
      alert("user id is negative or zero");
    }
  };

  return (
    <div>
      <Link to="/">
        <button type="text" className="btn btn-primary">
          &larr;
        </button>
      </Link>
      <h2>Add a post</h2>
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      <form onSubmit={handleSubmit} className="container">
        <div className="mb-3">
          {loading && (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            value={title} // Controlled component
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            minLength={5} // Minimum 5 characters
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Body
          </label>
          <textarea
            className="form-control"
            required
            onChange={(e) => setBody(e.target.value)}
            value={body} // Controlled component
          />
          <div className="container">
            <p> Min 500 words / {body.length}</p>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            User ID
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              const value = e.target.value;
              // Ensure the entered value is a whole positive number
              if (/^\d+$/.test(value) || value === "") {
                setUserId(value);
              }
            }}
            value={userId} // Controlled component
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addpost;
