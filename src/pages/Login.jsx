import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './pages.css';
import axios from 'axios';
import Swal from "sweetalert2";
import { login } from '../redux/actions/action';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loggedIn);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://final-project-be7-production-b776.up.railway.app/api/aut/login',
        { username, password }
      );

      const token = response.data.accessToken;
      const loggedInUsername = response.data.data.username;

      localStorage.setItem('accessToken', token);
      localStorage.setItem('username', loggedInUsername);

      setUsername('');
      setPassword('');

      dispatch(login(loggedInUsername));

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Selamat Anda berhasil Login!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate('/');
          window.location.reload();
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <body>
        <section className="section form-con" id="login">
          <div className="container form-box">
            <h2 className="section-title">Login</h2>
            <form id="login_form" autoComplete="on" onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  id="username"
                  name="username"
                  required="required"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="user-box">
                <input
                  id="password"
                  name="password"
                  required="required"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label htmlFor="password">Password</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <h5 className="section-text">
                Tidak mempunyai akun?
                <NavLink to={'/register'}> Sign Up</NavLink>
              </h5>
            </form>
          </div>
        </section>
      </body>
    </>
  );
};

export default Login;