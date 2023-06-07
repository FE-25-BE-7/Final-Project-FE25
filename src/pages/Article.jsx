import React from "react";
import { IoChevronForward, IoCalendar, IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./pages.css";

export const Article = () => {
  return (
    <>
    <body>
    <main>

    <section className="section banner" id="banner">
    <img src="src/assets/B-01.svg" alt="Background" className="banner bg" />
      <div className="container">
        <div className="banner-content">
          <h2 className="h1 section-title">Artikel</h2>
        </div>
      </div>
    </section>

      <article className="article" id="article">
      <div className="container">
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
                    <time datetime="2023-03-17">17 Maret 2023</time>
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
            <li>
              <div className="article-card">
                <figure className="article-banner">
                  <img src="https://i.ibb.co/zPf07N4/gas1.jpg" alt="Equitable Transportation, Savior(s) of Safe Mobility in Our Society" />
                </figure>
                <div className="article-meta">
                  <span>
                    <IoCalendar />
                    <time datetime="2023-03-28">15 Maret 2023</time>
                  </span>
                  <span>
                    <IoPerson />
                    <p>Greenpeace</p>
                  </span>
                </div>
                <h3 className="article-title">Gerakan Lingkungan dan Buruh Mesti Bersatu Perjuangan Iklim adalah Perjuangan Kelas</h3>
                <p className="article-text">
                  Di Indonesia dan berbagai belahan dunia, kelas pekerja terlibat dalam perjuangan lingkungan hidup dan keadilan iklim. Tujuannya ialah bergerak ke ekonomi...
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
                  <img src="https://i.ibb.co/MCf9WHB/gas2.jpg" alt="IPCC Reveals Climate Crisis More Real, Ambitious Climate Action Needed Now" />
                </figure>
                <div className="article-meta">
                  <span>
                    <IoCalendar />
                    <time datetime="2023-03-22">12 Maret 2023</time>
                  </span>
                  <span>
                    <IoPerson />
                    <p>Munaroh</p>
                  </span>
                </div>
                <h3 className="article-title">Indonesia Ranking Satu Negara Paling Berpolusi se-Asia Tenggara</h3>
                <p className="article-text">
                  Polusi udara berisiko besar terhadap kesehatan. Sayangnya, pemerintah tampaknya masih abai terhadap hak rakyat atas udara bersih...
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
                  <img src="https://i.ibb.co/GxjR03N/gas3.jpg" alt="Papua Clear Voice Festival, Understanding and Voicing Papua Through Arts and Culture" />
                </figure>
                <div className="article-meta">
                  <span>
                    <IoCalendar />
                    <time datetime="2023-03-17">17 Maret 2023</time>
                  </span>
                  <span>
                    <IoPerson />
                    <p>Greenpeace</p>
                  </span>
                </div>
                <h3 className="article-title">Soroti Peran Indonesia dalam Perlindungan Laut Global Aktivis Greenpeace</h3>
                <p className="article-text">
                  Peran Indonesia sebagai negara kepulauan terbesar di dunia sangat vital dalam upaya mewujudkan target 30x30 ini. Dan tahun 2030 tinggal tujuh tahun lagi...
                </p>
                <Link to={"./artikel"} className="article-link-btn">
                  <span>Selengkapnya</span>
                  <IoChevronForward />
                </Link>
              </div>
            </li>
          </ul>
          <div className="article-button">
            <a href="article.html" className="btn btn-primary" >Read More</a>
          </div>
        </div>
      </article>
    </main>
    </body>
    </>
  );
};