import React from "react";
// import logo from "./imgs/logo.png";
import "./Style.css";
// import { Link } from "react-router-dom";
function ProjectNavbar() {
  return (
    <>
      <header className="m-0 p-0 ">
        <div className="container-fluid px-5">
          <div className="row">
            <nav className="navbar navbar-expand-lg ">
              <a className="navbar-brand" href="...">
                <i className="fa-brands fa-free-code-camp"></i>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="...navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="...">
                      Work
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="...">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="...">
                      About
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <button className="btn btn-outline-success" type="submit">
                    Planner
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default ProjectNavbar;
