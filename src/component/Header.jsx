import React from "react";
import img from "./imgs/img.png";
import "./Style.css";
const Header = () => {
  return (
    <div className="Header container-fluid row">
      <div className="col-12 col-sm-6">
        <h2>
          Articals For <br />
          <div className="green">front-end devs</div>
        </h2>
        <p className="m-auto">
          Articles on web performance responsive web design and more
        </p>
      </div>
      <div className="col-12 col-sm-6 m-auto">
        <img src={img} className="img-fluid mb-3" alt="..." />
      </div>
    </div>
  );
};

export default Header;
