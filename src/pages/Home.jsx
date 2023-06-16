import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./pages.css";
import ProgramsListHome from "../components/ProgramListHome";
import ArticleList from "../components/ItemsListHome";

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
          <ArticleList />
          <div className="article-button">
            <NavLink to={"./artikel"} className="btn btn-primary" >Baca Lebih Lanjut</NavLink>
          </div>
        </div>
      </article> 

      <section className="program" id="program">
        <div className="container">
          <h2 className="h1 section-title">Program Kami</h2>
          <ProgramsListHome />
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
            <Link to={"./about"} reloadDocument className="btn btn-primary">Selengkapnya</Link>
          </div>
        </div>
      </section>
    </main>
    </body>
    </>
  );
};