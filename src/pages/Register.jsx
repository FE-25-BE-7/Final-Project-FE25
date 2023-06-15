import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './pages.css';
import axios from 'axios';
import Swal from "sweetalert2";
import { login } from '../redux/actions/action';

const Register = () => {
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
        'https://final-project-be7-production-b776.up.railway.app/api/aut/register',
        { username, password }
      );

      console.log(response);
      if (response.status === 200) {

        // Dispatch the login action
        dispatch(login(username));
        Swal.fire({
          icon: 'success',
          title: 'Selamat Anda berhasil Sign Up!',
          text: 'Silahkan Login!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate('/login');
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
        <section className="section form-con" id="Register">
          <div className="container form-box">
            <h2 className="section-title">Sign Up</h2>
            <form id="regis_form" autoComplete="on" onSubmit={handleSubmit}>
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
              <input type="submit" className="btn btn-primary reg" value="Sign Up" />
            </form>
            <h5 className="section-text">
              Sudah mempunyai akun?
              <NavLink to={'/login'}> Login</NavLink>
            </h5>
          </div>
        </section>
      </body>
    </>
  );
};

export default Register;