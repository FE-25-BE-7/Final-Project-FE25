import React from "react"
import "./pages.css"
import ProgramsList from "../components/ProgramList"

export const Program = () => {
  return (
    <>
    <body>
      <section className="section banner banner-art" id="banner">
          <div className="container">
            <div className="banner-content">
              <h2 className="h1 section-title art">Program</h2>
              <p className="section-text art">
                Untuk melakukan perubahan kami beraksi secara langsung, dengan bantuan relawan dan donatur 
                seperti kamu kita bisa melakukan banyak kegiatan untuk berkampanye seperti berikut ini.</p>
            </div>
          </div>
      </section>

      <article className="article" id="article">
          <ProgramsList />
      </article>
    </body>
    </>
  );
};