import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import Swal from "sweetalert2";

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
    Swal.fire({
      icon: 'success',
      title: 'Selamat Anda berhasil Logout!',
      showConfirmButton: false,
      timer: 1000
    }).then(() => {
      navigate('/');
      window.location.reload();
    });
  };

  const handleClick = () => setClick(!click);

  const handleDonasi = () => {
    setClick(!click);
    if (isLoggedIn) {
      navigate('/donasi')
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Kamu harus Login terlebih dalulu!',
        showConfirmButton: false,
        timer: 1000
      }).then(() => {
        navigate('/login');
        window.location.reload();
      });
    }
  }
  
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
                reloadDocument
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
                reloadDocument
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
                reloadDocument
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
                reloadDocument
              >
                Tentang Kami
              </NavLink>
            </li>
            {isLoggedIn ? (
              <>
              <div className="nav-btn">
                <li>
                  <span className="user">Halo, {username}!</span>
                </li>
                <li>
                  <button onClick={() =>
                    Swal.fire({
                      title: 'Apakah kamu yakin akan Logout?',
                      icon: 'warning',
                      showCancelButton: true,
                      confirmButtonColor: '#169220',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Ya, Logout'
                    }).then((willLogout) => {
                      if (willLogout) {
                        handleLogout();
                      }
                    })}
                    className="btn btn-outline">Logout</button>
                </li>
              </div>
              
              </>
            ) : (
              <>
              <div className="nav-btn">
                <NavLink to={"/login"} onClick={handleDonasi}>
                  <button className="btn navbar-btn btn-primary">
                    <span>DONASI</span>
                  </button>
                </NavLink>
                <NavLink to={"/login"} reloadDocument>
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