// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Editpost = () => {
//   const [id, setId] = useState("");
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [userId, setUserId] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Fetch data from API when component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts/1"
//       ); // Replace with your API endpoint
//       const { data } = response;
//       setId(data?.id);
//       setTitle(data?.title);
//       setBody(data?.body);
//       setUserId(data?.userId);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     setLoading(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const blog = { title: title, body: body, userId: userId };
//     axios
//       .put(`https://jsonplaceholder.typicode.com/posts/${id}`, { blog })
//       .then((response) => {
//         console.log(response);
//         setLoading(false);
//         if (response.ok) {
//           console.log("successfully data is added");
//           setSuccessMessage("Blog is added successfully");
//           // Reset form fields after successful submission
//           setTitle("");
//           setBody("");
//           setUserId("");
//         }
//       })
//       .catch((error) => {
//         console.error("Error updating post:", error);
//         setLoading(false);
//       });
//   };

//   return (
//     <div>
//       <Link to="/">
//         <button type="text" className="btn btn-primary">
//           &larr;
//         </button>
//       </Link>
//       <h2>Edit a post</h2>
//       {successMessage && (
//         <div className="alert alert-success">{successMessage}</div>
//       )}
//       <form onSubmit={handleSubmit} className="container">
//         <div className="mb-3">
//           {loading && (
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           )}
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Title
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             onChange={(e) => setTitle(e.target.value)}
//             value={title} // Controlled component
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             Body
//           </label>
//           <textarea
//             className="form-control"
//             required
//             onChange={(e) => setBody(e.target.value)}
//             value={body} // Controlled component
//           />
//           <div className="container">
//             <p> Max 500 words / {body.length}</p>
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             User ID
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             onChange={(e) => {
//               const value = e.target.value;
//               // Ensure the entered value is a whole positive number
//               if (/^\d+$/.test(value) || value === "") {
//                 setUserId(value);
//               }
//             }}
//             value={userId}
//             id="exampleInputPassword1"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Editpost;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Editpost = () => {
//   const [id, setId] = useState("");
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [userId, setUserId] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Fetch data from API when component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts/1"
//       ); // Replace with your API endpoint
//       const { data } = response;
//       setId(data?.id);
//       setTitle(data?.title);
//       setBody(data?.body);
//       setUserId(data?.userId);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     setLoading(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const blog = { title: title, body: body, userId: userId };
//     axios
//       .put(`https://jsonplaceholder.typicode.com/posts/${id}`, { blog })
//       .then((response) => {
//         console.log(response);
//         setLoading(false);
//         if (response.ok) {
//           console.log("successfully data is added");
//           setSuccessMessage("Blog is added successfully");
//           // Reset form fields after successful submission
//           setTitle("");
//           setBody("");
//           setUserId("");
//         }
//       })
//       .catch((error) => {
//         console.error("Error updating post:", error);
//         setLoading(false);
//       });
//   };

//   const handleBodyChange = (e) => {
//     const value = e.target.value;
//     if (value.length <= 500) {
//       setBody(value);
//     } else {
//       // Alert when the limit of 500 words is reached
//       alert("Maximum 500 words allowed!");
//     }
//   };

//   return (
//     <div>
//       <Link to="/">
//         <button type="text" className="btn btn-primary">
//           &larr;
//         </button>
//       </Link>
//       <h2>Edit a post</h2>
//       {successMessage && (
//         <div className="alert alert-success">{successMessage}</div>
//       )}
//       <form onSubmit={handleSubmit} className="container">
//         <div className="mb-3">
//           {loading && (
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//           )}
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Title
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             onChange={(e) => setTitle(e.target.value)}
//             value={title} // Controlled component
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             Body
//           </label>
//           <textarea
//             className="form-control"
//             required
//             onChange={handleBodyChange}
//             value={body} // Controlled component
//           />
//           <div className="container">
//             <p> Max 500 words / {body.length}</p>
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             User ID
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             onChange={(e) => {
//               const value = e.target.value;
//               // Ensure the entered value is a whole positive number
//               if (/^\d+$/.test(value) || value === "") {
//                 setUserId(value);
//               }
//             }}
//             value={userId}
//             id="exampleInputPassword1"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Editpost;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Editpost = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch data from API when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      ); // Replace with your API endpoint
      const { data } = response;
      setId(data?.id);
      setTitle(data?.title);
      setBody(data?.body);
      setUserId(data?.userId);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const blog = { title: title, body: body, userId: userId };

    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, { blog })
      .then((response) => {
        console.log(response);
        setLoading(false);
        if (response.ok) {
          console.log("successfully data is added");
          setSuccessMessage("Blog is added successfully");
          // Reset form fields after successful submission
          setTitle("");
          setBody("");
          setUserId("");
        }
      })
      .catch((error) => {
        console.error("Error updating post:", error);
        setLoading(false);
      });
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    // Check if the entered value has a minimum length of 5 characters
    if (value.length < 5) {
      alert("Title must be at least 5 characters long");
    } else if (value.length <= 100) {
      setTitle(value);
    } else {
      alert("Title cannot exceed 100 characters");
    }
  };

  const handleBodyChange = (e) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setBody(value);
    } else {
      // Alert when the limit of 500 words is reached
      alert("Maximum 500 words allowed!");
    }
  };

  return (
    <div>
      <Link to="/">
        <button type="text" className="btn btn-primary">
          &larr;
        </button>
      </Link>
      <h2>Edit a post</h2>
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
            onChange={handleTitleChange}
            value={title} // Controlled component
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
            onChange={handleBodyChange}
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
            value={userId}
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

export default Editpost;
