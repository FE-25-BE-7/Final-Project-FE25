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
        {/* <img src="src/assets/B-01.svg" alt="Background" className="banner bg" /> */}
          <div className="container">
            <div className="banner-content">
              <h2 className="h1 section-title">Artikel</h2>
            </div>
          </div>
        </section>
  
        <article className="article" id="article">
          {/* <div className="container"> */}
            <ItemsList />
            {/* <div className="article-button">
            <a href="article.html" className="btn btn-primary" >Read More</a>
            </div> */}
          {/* </div> */}
        </article>
      </main>
    </body>
    </>
  );
};