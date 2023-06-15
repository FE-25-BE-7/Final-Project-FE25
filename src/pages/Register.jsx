import React,{useState} from "react";
import {  } from "react-icons/io5";
import { NavLink, useNavigate} from "react-router-dom";
import "./pages.css";
import axios from "axios";

export const Register = () => {
  const navigate = useNavigate();
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
      const response = await axios.post('https://final-project-be7-production-b776.up.railway.app/api/aut/register', { username, password });
      console.log(response)
      if(response.status === 200) {
        alert('Registered successfully');
        navigate('/login');
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
          <form id="regis_form" autocomplete="on" onSubmit={handleSubmit}>
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
              <input type="submit" className="btn btn-primary reg" value="Sign Up" />
          </form>
          <h5 className="section-text">Sudah mempunyai akun? 
          <NavLink to={"/login"}>Login</NavLink> 
          </h5>
        </div>
    </section>
    </body>
    </>
  );
};