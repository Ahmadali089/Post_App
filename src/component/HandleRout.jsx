import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPost from "./MainPost.jsx";
import Details from "./Details.jsx";
import AddPost from "./Addpost.jsx";
import EditPost from "./Editpost.jsx";

function HandleRout() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPost />} />
          <Route path="/AddPost" element={<AddPost />} />
          <Route path="/post/:id" element={<Details />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default HandleRout;
