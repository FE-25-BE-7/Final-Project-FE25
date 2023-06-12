import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import "./pages.css";

export const About = () => {
  return (
    <>
    <body>
    <section className="section about" id="about" aria-label="about">
        <div className="container">
          <div className="about-banner img-holder">
            <img src="src\assets\GP-AU.jpg" width="720" height="960" loading="lazy" alt="about banner" className="img-cover" />
          </div>
          <div className="about-content">
            <h2 className="h2 section-title">Tentang Kami</h2>
            <h3 className="h3">Greenpeace hadir karena bumi yang rapuh ini perlu suara. Butuh solusi. Butuh perubahan. Butuh aksi.</h3>
            <p className="section-text">
              Di seluruh dunia, kita berdiri bersama-sama dengan masyarakat, menuntut pertanggung jawaban berbagai pemerintahan dan
              perusahaan untuk bertanggung jawab. Mulai dari jalanan hingga ke tempat para pengambil keputusan, kita mempunyai kekuatan nyata jika kita bekerja sama.  
            </p>
            <h3 className="h3">Nilai Dasar</h3>
            <ul className="about-list">
              <li className="about-item">
                <IoCheckmarkCircle color= "green"/>
                <p className="section-text">Aksi tanpa kekerasan dan bertanggung jawab secara pribadi.</p>
              </li>
              <li className="about-item">
                <IoCheckmarkCircle color= "green"/>
                <p className="section-text">Independensi.</p>
              </li>
              <li className="about-item">
                <IoCheckmarkCircle color= "green"/>
                <p className="section-text">Greenpeace tidak punya lawan atau kawan yang permanen.</p>
              </li>
              <li className="about-item">
                <IoCheckmarkCircle color= "green"/>
                <p className="section-text">Mempromosikan solusi.</p>
              </li>
            </ul>
        </div>
        </div>     
      </section>
    </body>
    </>
  );
};