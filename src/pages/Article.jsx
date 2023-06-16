import React from "react";
import ItemsList from "../components/ItemsList";
import "./pages.css";

export const Article = () => {
  return (
    <>
    <body>
      <main>
        <section className="section banner banner-art" id="banner">
          <div className="container">
            <div className="banner-content">
              <h2 className="h1 section-title art">Artikel</h2>
            </div>
          </div>
        </section>
  
        <article className="article" id="article">
          <ItemsList />
        </article>
      </main>
    </body>
    </>
  );
};