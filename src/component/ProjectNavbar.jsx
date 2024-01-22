import React from "react";
import logo from "./imgs/logo.png";
import "./Style.css";
function ProjectNavbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} width={70} height={50} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  about
                </a>
              </li>
            </ul>

            <button class="btn mx-2" type="button">
              blog
            </button>
            <button class="btn " type="button">
              planner
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ProjectNavbar;
