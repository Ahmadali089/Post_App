// import { NavLink, Link } from "react-router-dom";
// import "./App.css";
// import { useState } from "react";
// import { Routers } from "./component/Routers";
// import { data } from "./component/data.jsx";
// import ProjectNavbar from "./component/ProjectNavbar";
// import Work from "./component/Work";
// import { Routers } from "./component/Routers";

// import Services from "./component/Services";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./component/Header";
// import Details from "./component/Details";
// import MainPost from "./component/MainPost";
// import YourComponent from "./component/ProjectNavbar";
// import Addpost from "./component/Addpost";
// import Editpost from "./component/Editpost";

import CalculatorApp from "./component/CalculatorApp";

const App = () => {
  return (
    <>
      {/* <ProjectNavbar /> */}
      {/* <YourComponent />

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
          <Route path="/Editpost/:Id" element={<Editpost />}></Route>
        </Routes>
      </Router> */}
      <CalculatorApp />
    </>
  );
};

export default App;

// import React from "react";
// import Header from "./component/Header.jsx";
// import ProjectNavbar from "./component/ProjectNavbar.jsx";
// import HandleRout from "./component/HandleRout.jsx";

// function App() {
//   return (
//     <>
//       <ProjectNavbar />
//       <Header />
//       <HandleRout />
//     </>
//   );
// }

// export default App;
