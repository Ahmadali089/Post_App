import React from "react";

const Addpost = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post title:
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Post body:
          </label>
          <textarea
            id="w3review"
            name="w3review"
            className="form-control"
          ></textarea>
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Post id:
            </label>
            <input
              type="Number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
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
