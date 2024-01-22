// import { NavLink, Link } from "react-router-dom";
// import "./App.css";
// import { useState } from "react";
// import { Routers } from "./component/Routers";

import Data from "./component/Data";
import Header from "./component/Header";
import ProjectNavbar from "./component/ProjectNavbar";

const App = () => {
  return (
    <>
      {/* <div className="bg-secondary py-3">
        <header className="container d-flex justify-content-between align-items-center">
          <a href="#">Logo</a>
          <nav>
            <ul className="list-unstyled d-flex align-items-center mb-0">
              <li className="me-3">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="me-3">
                <NavLink to="about">About</NavLink>
              </li>
              <li className="me-3">
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routers />
      </div> */}
      <div>
        <ProjectNavbar />
        <Header />
        <Data />
      </div>
    </>
  );
};

export default App;
