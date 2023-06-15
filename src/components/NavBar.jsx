import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [click, setClick] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    const storedUsername = localStorage.getItem('username');

    if (storedToken && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, [isLoggedIn, username]);

  const handleLogout = () => {
    localStorage.clear();
    alert('Logout successfully');
    navigate('/');
    window.location.reload();
  };

  const handleClick = () => setClick(!click);
  
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <img src="https://i.ibb.co/DgJ1wqm/logo-gp.png" alt="logo-gp" border="0"/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
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
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Tentang Kami
              </NavLink>
            </li>
            {isLoggedIn ? (
              <>
              <div className="nav-btn">
                <li>
                  <span className="btn">Halo, {username}!</span>
                </li>
                <li>
                  <button onClick={handleLogout} className="btn btn-outline">Logout</button>
                </li>
              </div>
              
              </>
            ) : (
              <>
              <div className="nav-btn">
                <NavLink to={"/donasi"}>
                  <button className="btn navbar-btn btn-primary">
                    <span>DONASI</span>
                  </button>
                </NavLink>
                <NavLink to={"/login"}>
                  <button id="btn-login" className="btn navbar-btn btn-outline">
                    <span>Login</span>
                  </button>
                </NavLink>
              </div>
              </>
            )}
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;