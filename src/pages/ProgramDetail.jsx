import React from "react";
import VolunteerList from "../components/VolunteerList";
import "./pages.css";

export const ProgramDetail = () => {
  return (
    <>
    <body>
      <main>
        <section className="section banner banner-art" id="banner">
          <div className="container">
            <div className="banner-content">
              <h2 className="h1 section-title art">RELAWAN</h2>
            </div>
          </div>
        </section>
  
        <article className="article" id="article">
          <VolunteerList />
        </article>
      </main>
    </body>
    </>
  );
};