import React from "react";
import {  } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./pages.css";

export const Login = () => {
  return (
    <>
    <body>
    <section className="section form-con" id="login">
        <div className="container form-box">
          <h2 className="section-title">Login</h2>
          <form id="login_form" autocomplete="on">
              <div className="user-box">
                  <input id="username" name="username" required="required" type="text" />
                  <label for="username">Username</label>
              </div>
              <div className="user-box">
                  <input id="password" name="password" required="required" type="password" />
                  <label for="password">Password</label>
              </div>
              <input type="submit" className="btn btn-primary" value="Login" />
              <h5 className="section-text">Tidak mempunyai akun? 
              <NavLink to={"./register"}>Sign Up</NavLink>
              </h5>
          </form>
        </div>
    </section>
    </body>
    </>
  );
};