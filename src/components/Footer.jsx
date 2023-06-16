import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IoCallOutline, IoLocationOutline, IoMailOutline, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <>
      <body>
      <footer>
          <div className="footer-top">
            <div className="container">
              <div className="footer-brand">
                <a href="#" className="logo">
                  <img src="https://i.ibb.co/DgJ1wqm/logo-gp.png" alt="gp logo" />
                </a>
                <p className="footer-text">
                  Greenpeace memiliki misi untuk membuat dunia yang lebih hijau dan damai.
                </p>
                <ul className="social-list">
                  <li>
                    <Link to="#" className="social-link">
                      <IoLogoFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="social-link">
                      <IoLogoTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="social-link">
                      <IoLogoInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-link-box">
                <ul className="footer-list">
                  <li>
                    <p className="footer-item-title">MENU</p>
                  </li>
                  <li>
                    <NavLink to={"./"} reloadDocument>
                    <a className="footer-link">Home</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"./artikel"} reloadDocument>
                    <a className="footer-link">Artikel</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"./program"} reloadDocument>
                    <a className="footer-link">Program</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"./about"} reloadDocument>
                    <a className="footer-link">Tentang Kami</a>
                    </NavLink>
                  </li>
                </ul>
                <ul className="footer-list">
                  <li>
                    <p className="footer-item-title">CONTACT</p>
                  </li>
                  <ul className="contact-list">
                    <li>
                      <Link to="#" className="contact-link">
                        <IoLocationOutline />
                        <address>Kecamatan Menteng, Jakarta Pusat</address>
                      </Link>
                    </li>
                    <li>
                      <Link to="tel:+62213148521" className="contact-link">
                        <IoCallOutline />
                        <span>+62213148521</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="mailto:info.id@greenpeace.org" className="contact-link">
                        <IoMailOutline />
                        <span>info.id@greenpeace.org</span>
                      </Link>
                    </li>
                  </ul>
                </ul>         
               </div>
             </div>
          </div>
           <div className="footer-bottom">
            <div className="container">
              <p className="copyright">&copy; 2023 <Link to="/" reloadDocument>Greenpeace</Link>. All Right Reserved</p>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}

export default Footer;