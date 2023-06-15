import React,{useState} from "react";
import {  } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import "./pages.css";
import axios from "axios";


export const Login = () => {
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
      
      const response = await axios.post('https://final-project-be7-production-b776.up.railway.app/api/aut/login', { username, password });
      const token = response.data.accessToken; 
      
      localStorage.setItem('accessToken', token);
      setUsername('');
      setPassword('');
      alert('Login successfully');
        navigate('/');
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
          <form id="login_form" autocomplete="on" onSubmit={handleSubmit}>
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
              <button type="submit" className="btn btn-primary"> login </button>
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