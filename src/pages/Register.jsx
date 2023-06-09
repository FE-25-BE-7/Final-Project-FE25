import React from "react";
import {  } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./pages.css";

export const Register = () => {
  return (
    <>
    <body>
    <section className="section form-con" id="Register">
        <div className="container form-box">
          <h2 className="section-title">Sign Up</h2>
          <form id="regis_form" autocomplete="on">
              <div className="user-box">
                  <input id="username" name="username" required="required" type="text" />
                  <label for="username">Username</label>
              </div>
              <div className="user-box">
                  <input id="password" name="password" required="required" type="password" />
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