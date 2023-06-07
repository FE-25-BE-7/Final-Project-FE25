import React from "react";
import { IoChevronForward, IoCalendar, IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./pages.css";

export const Home = () => {
  return (
    <>
    <body>
    <main>
      <section className="section hero" id="home">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Greenpeace</p>
            <h1 className="h1 hero-title">Mari Lindungi Bumi Bersama kami</h1>
            <p className="hero-text" id="description">
              Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh solusi. Butuh perubahan. Butuh aksi. 
            </p>
            <Link to={"./login"} className="btn btn-primary">Gabung Sekarang</Link>
          </div>
          <figure className="hero-banner">
            <img src="https://i.ibb.co/NSZ8PTq/scouts.png" alt="hero banner"/>
          </figure>
        </div>
      </section>

      <article className="article" id="article">
        <div className="container">
          <h2 className="h1 section-title">Artikel</h2>
          <ul className="article-list">
            <li>
              <div className="article-card">
                <figure className="article-banner">
                  <img src="https://i.ibb.co/zm9PHXx/article2.jpg" alt="Equitable Transportation, Savior(s) of Safe Mobility in Our Society" />
                </figure>
                <div className="article-meta">
                  <span>
                    <IoCalendar />
                    <time datetime="2023-03-28">28 Maret 2023</time>
                  </span>
                  <span>
                    <IoPerson />
                    <p>Wahyudi</p>
                  </span>
                </div>
                <h3 className="article-title">Transportasi Berkeadilan, Juru(s) Selamat Mobilitas Masyarakat Kita</h3>
                <p className="article-text">
                  Transportasi umum adalah kebutuhan dasar  masyarakat dan diwujudkan oleh pemerintah dari hasil memungut pajak masyarakatnya...
                </p>
                <Link to={"./artikel"} className="article-link-btn">
                  <span>Selengkapnya</span>
                  <IoChevronForward />
                </Link>
              </div>
            </li>
            <li>
              <div className="article-card">
                <figure className="article-banner">
                  <img src="https://i.ibb.co/jzKbkn7/article3.jpg" alt="IPCC Ungkap Krisis Iklim Makin Nyata, Aksi Iklim Ambisius Dibutuhkan Sekarang" />
                </figure>
                <div className="article-meta">
                  <span>
                    <IoCalendar />
                    <time datetime="2023-03-22">22 Maret 2023</time>
                  </span>
                  <span>
                    <IoPerson />
                    <p>Greenpeace</p>
                  </span>
                </div>
                <h3 className="article-title">IPCC Ungkap Krisis Iklim Makin Nyata, Aksi Iklim Ambisius Dibutuhkan Sekarang</h3>
                <p className="article-text">
                  Kenaikan suhu Bumi bisa menuju angka 2.8°C pada 2100, melebihi batas aman pemanasan global. Aksi iklim yang ambisius dibutuhkan sekarang juga...
                </p>
                <Link to={"./artikel"} className="article-link-btn">
                  <span>Selengkapnya</span>
                  <IoChevronForward />
                </Link>
              </div>
            </li>
            <li>
              <div className="article-card">
                <figure className="article-banner">
                  <img src="https://i.ibb.co/Qbn1hmS/article1.jpg" alt="Papua Clear Voice Festival, Understanding and Voicing Papua Through Arts and Culture" />
                </figure>
                <div className="article-meta">
                  <span>
                    <IoCalendar />
                    <time datetime="2023-03-17">17 March 2023</time>
                  </span>
                  <span>
                    <IoPerson />
                    <p>Ridwan Dimas</p>
                  </span>
                </div>
                <h3 className="article-title">Festival Suara Jernih Papua, Memahami dan Menyuarakan Papua Lewat Seni dan Budaya</h3>
                <p className="article-text">
                  Jakarta, 17 Maret 2023. Greenpeace berkolaborasi dengan Papua Itu Kita–forum solidaritas Papua yang berfokus pada HAM serta pusat informasi...
                </p>
                <Link to={"./artikel"} className="article-link-btn">
                  <span>Selengkapnya</span>
                  <IoChevronForward />
                </Link>
              </div>
            </li>
          </ul>
          <div className="article-button">
            <a href="article.html" className="btn btn-primary" >Baca Lebih Lanjut</a>
          </div>
        </div>
      </article> 

      <section className="program" id="program">
        <div className="container">
          <h2 className="h1 section-title">Program Kami</h2>
          <ul className="program-list">
            <li>
              <div className="program-card">
                <div className="card-icon">
                  <img src="https://i.ibb.co/hCBYQjC/d1.png" alt="Donation icon" />
                </div>
                <h3 className="h3 card-title">Donasi</h3>
                <p className="card-text">
                Mari membela lingkungan sepanjang hidupmu, bahkan lebih lama dari itu. Berdonasilah hari ini.  
                </p>
                <Link to={"./donasi"} className="card-link">
                  <span>Donasi Sekarang</span>
                  <IoChevronForward />
                </Link>
              </div>
            </li>
            <li>
              <div className="program-card">
                <div className="card-icon">
                  <img src="https://i.ibb.co/GdDvCx5/v1.png" alt="Volunteer icon" />
                </div>
                <h3 className="h3 card-title">Relawan</h3>
                <p className="card-text">
                  Bumi kita membutuhkan suara dan aksimu untuk mencari solusi membuat perubahan nyata.
                </p>
                <Link to={"./program"} className="card-link">
                  <span>Gabung Sekarang</span>
                  <IoChevronForward />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container">
          <figure className="hero-banner">
            <img src="https://i.ibb.co/H7Cq5Mn/gp-about.jpg" alt="hero banner" />
          </figure>
          <div className="hero-content">
            <p className="hero-subtitle">Kenali organisasi kami</p>
            <h1 className="h1 hero-title">Tentang Kami</h1>
            <p className="hero-text">
              Greenpeace adalah organisasi kampanye independen, yang menggunakan konfrontasi kreatif dan damai untuk mengungkap masalah lingkungan global, dan mengembangkan solusi untuk masa depan yang hijau dan damai.
            </p>
            <Link to={"./about"} className="btn btn-primary">Selengkapnya</Link>
          </div>
        </div>
      </section>
    </main>
    </body>
    </>
  );
};