import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://6454d140f803f34576320f15.mockapi.io/gp/article/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <section class="section article-detail" id="article">
      <div class="container">
        <br />
          <h2 class="section-title">{article.title}</h2>
          <div>
            <h5 class="penulis">{article.author}</h5>
            <h5 class="penulis">{article.date}</h5>
          </div>
          <div class="share-sosmed">
            {/* <div id="wa">
              <IoLogoWhatsapp name="logo-whatsapp" size="large" ></IoLogoWhatsapp>
            </div>
            <div id="twt">
              <IoLogoTwitter name="logo-twitter"size="large" ></IoLogoTwitter>
            </div>
            <div id="FB">
              <IoLogoFacebook name="logo-facebook" size="large"></IoLogoFacebook>
            </div> */}
          </div>
          <figure class="hero-banner art-img">
            <img src={article.image} alt="Equitable Transportation, Savior(s) of Safe Mobility in Our Society" />
          </figure>
          <div class="para-artikel">
            <p>{article.one}</p>
            <br />
            <p>{article.two}</p>
            <br />
            <p><i>{article.three}</i></p>
            <br />
            <p>{article.four}</p>
            <br />
            <p>{article.five}</p>
            <br />
            <p>{article.six}</p>
          </div>
      </div>
    </section>
  );
};

export default ArticleDetail;