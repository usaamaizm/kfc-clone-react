/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../KFC-Logo-Red.png";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" mb-4">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="btn btn-delivery" aria-current="page" href="#">
                  Start an order for delivery
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="btn me-2" aria-current="page" href="#">
                  <i className="bi bi-geo-fill"></i>
                  <span className="text-loc"> Select Location</span>
                  <i className="bi bi-chevron-down text-loc"></i>
                </a>
              </li>

              <li className="nav-item">
                <Link
                  className="btn btn-cart-counter me-2"
                  aria-current="page"
                  to="/countries"
                >
                  Countires
                </Link>
              </li>

              <li className="nav-item">
                <Link className="btn btn-danger" to="/login">
                  Register / Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
