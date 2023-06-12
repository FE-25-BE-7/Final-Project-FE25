import React from "react";
import { NavLink } from "react-router-dom";
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
                    <a href="#" className="social-link">
                      <IoLogoFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <IoLogoInstagram />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-link-box">
                <ul className="footer-list">
                  <li>
                    <p className="footer-item-title">MENU</p>
                  </li>
                  <li>
                    <NavLink to={"./"}>
                    <a href="index.html" className="footer-link">Home</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"./artikel"}>
                    <a href="article.html" className="footer-link">Artikel</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"./program"}>
                    <a href="program.html" className="footer-link">Program</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"./about"}>
                    <a href="about.html" className="footer-link">Tentang Kami</a>
                    </NavLink>
                  </li>
                </ul>
                <ul className="footer-list">
                  <li>
                    <p className="footer-item-title">CONTACT</p>
                  </li>
                  <ul className="contact-list">
                    <li>
                      <a href="#" className="contact-link">
                        <IoLocationOutline />
                        <address>Kecamatan Menteng, Jakarta Pusat</address>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+62213148521" className="contact-link">
                        <IoCallOutline />
                        <span>+62213148521</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info.id@greenpeace.org" className="contact-link">
                        <IoMailOutline />
                        <span>info.id@greenpeace.org</span>
                      </a>
                    </li>
                  </ul>
                </ul>         
               </div>
             </div>
          </div>
           <div className="footer-bottom">
            <div className="container">
              <p className="copyright">&copy; 2023 <a href="">Greenpeace</a>. All Right Reserved</p>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}

export default Footer;