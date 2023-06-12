import React,{useState} from "react";
import {  } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./pages.css";
import axios from "axios";

export const Login = () => {

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
      // Send a POST request to your backend API to authenticate the user
      const response = await axios.post('/api/login', { username, password });
      const token = response.data.token; // Assuming the server returns a token

      // Store the token in local storage
      localStorage.setItem('token', token);

      // Redirect to the authenticated page or perform any other action
      console.log('Login successful');
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
          <form id="login_form" autocomplete="on">
              <div className="user-box">
                  <input 
                  id="username" 
                  name="username" 
                  required="required" 
                  type="text" 
                  value={username}
                  onChange={handleUsernameChange} 
                  />
                  <label for="username">Username</label>
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
                  <label for="password">Password</label>
              </div>
              <input type="submit" className="btn btn-primary" value="Login" />
              <h5 className="section-text">Tidak mempunyai akun? 
              <NavLink to={"/register"}>Sign Up</NavLink>
              </h5>
          </form>
        </div>
    </section>
    </body>
    </>
  );
};