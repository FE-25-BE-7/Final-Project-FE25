import React from "react";
import ItemsList from "../components/ItemsList";
import "./pages.css";

export const Article = () => {
  // const apiUrl = 'https://6454d140f803f34576320f15.mockapi.io/gp/article';
  return (
    <>
    <body>
      <main>
        <section className="section banner" id="banner">
          <div className="container">
            <div className="banner-content">
              <h2 className="h1 section-title">Artikel</h2>
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