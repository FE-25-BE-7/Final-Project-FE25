import React from "react";
import { IoChevronForward, IoCalendar, IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./pages.css";

export const Program = () => {
  return (
    <>
    <body>
      <section className="section banner" id="banner">
        {/* <img src="src/assets/B-01.svg" alt="Background" className="banner bg" /> */}
          <div className="container">
            <div className="banner-content">
              <h2 className="h1 section-title">Program</h2>
              <p className="section-text">
                Untuk melakukan perubahan kami beraksi secara langsung, dengan bantuan relawan dan donatur 
                seperti kamu kita bisa melakukan banyak kegiatan untuk berkampanye seperti berikut ini.</p>
            </div>
          </div>
      </section>

      <article className="article" id="article">
        <div className="container">
          <div className="blog-card">
            <div className="meta">
              <div className="photo" style={{ backgroundImage: "url('https://i.ibb.co/8P2Hh4y/donation-tree.jpg')"}}></div>
              <ul className="details">
                <li className="author"><IoPerson />John Doe</li>
                <li className="date"><IoCalendar />Aug. 24, 2015</li>
              </ul>
            </div>
            <div className="description">
              <h1>DONASI</h1>
              <h2>Bantu kami menjaga bumi kita</h2>
              <p>Mari membela lingkungan sepanjang hidupmu, bahkan lebih lama dari itu. Berdonasilah hari ini.</p>
              <p className="read-more">
                <Link to={"/"}>Donasi Sekarang</Link>
              </p>
            </div>
          </div>
          <div className="blog-card alt">
            <div className="meta">
              <div className="photo" style={{ backgroundImage: "url('https://i.ibb.co/2tfKX7S/volunteer-teamwork.jpg')"}}></div>
              <ul className="details">
                <li className="author"><IoPerson />John Doe</li>
                <li className="date"><IoCalendar />Aug. 24, 2015</li>
              </ul>
            </div>
            <div className="description">
              <h1>RELAWAN</h1>
              <h2>Mari bergabung menjadi relawan</h2>
              <p>Bumi kita membutuhkan suara dan aksimu untuk mencari solusi membuat perubahan nyata.</p>
              <p className="read-more">
                <Link to={"/"}>Daftar Sekarang</Link>
              </p>
            </div>
          </div>
        </div>
      </article>
    </body>
    </>
  );
};