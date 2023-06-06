import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            {/* GreenPeace */}
            <img src="https://i.ibb.co/DgJ1wqm/logo-gp.png" alt="logo-gp" border="0"/>
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/artikel"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Artikel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/program"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Program
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Tentang Kami
              </NavLink>
            </li>
            <div className="nav-btn">
              <NavLink to={"./donasi"}>
              <button className="btn navbar-btn btn-primary" >
                <span>DONASI</span>
              </button>
              </NavLink>
              <NavLink to={"./login"}>
                <button id="btn-login" className="btn navbar-btn btn-outline">
                  <span>Login</span>
                </button>
              </NavLink>
            </div>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;