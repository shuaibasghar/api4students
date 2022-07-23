import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="position-sticky w-sm-100 top-0" style={{zIndex: 10}}>
      <nav
        className="navbar navbar-dark bg-dark p-2 d-flex align-items-center"
        style={{ zIndex: "10" }}
      >
        <div className="container-fluid">
        <Link to="/">
            <span
              className="navbar-brand mb-0 h5 text-white"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Home
              {" "}
            </span>
          </Link>
          <Link to="/shop">
            <span
              className="navbar-brand mb-0 h5 text-white"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Shop
            </span>
          </Link>

          <Link to="/orders">
            <span
              className="text-white h5 mb-0"
              
              style={{ textDecoration: "none" }}
            >
              Orders
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
