/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../KFC-Logo-Red.png";
import React from "react";

function Header() {
  return (
    <header className="container mb-4">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
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
                <a
                  className="btn btn-cart-counter me-2"
                  aria-current="page"
                  href="#"
                >
                  0
                </a>
              </li>

              <li className="nav-item">
                <a className="btn btn-danger" href="#">
                  Register / Sign in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
