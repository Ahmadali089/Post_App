// import { NavLink, Link } from "react-router-dom";
// import "./App.css";
// import { useState } from "react";
// import { Routers } from "./component/Routers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { data } from "./component/data.jsx";
import Header from "./component/Header";
// import ProjectNavbar from "./component/ProjectNavbar";
import Details from "./component/Details";
import MainPost from "./component/MainPost";
import YourComponent from "./component/ProjectNavbar";
import Addpost from "./component/Addpost";
import Editpost from "./component/Editpost";
// import CalculatorApp from "./component/CalculatorApp";
// import Services from "./component/Services";
// import Work from "./component/Work";
// import { Routers } from "./component/Routers";

const App = () => {
  return (
    <>
      {/* <ProjectNavbar /> */}
      <YourComponent />

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <MainPost />
              </>
            }
          ></Route>
          <Route path="/post/:id" element={<Details />}></Route>
          <Route path="/Addpost/" element={<Addpost />}></Route>
          <Route path="/Editpost/" element={<Editpost />}></Route>
        </Routes>
      </Router>
      {/* <CalculatorApp /> */}
    </>
  );
};

export default App;
