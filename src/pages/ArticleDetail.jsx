import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {IoLogoFacebook, IoLogoTwitter, IoLogoWhatsapp} from 'react-icons/io';
import {FacebookShareButton, TwitterShareButton, WhatsappShareButton}from 'react-share';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://6454d140f803f34576320f15.mockapi.io/gp/detail-article/${id}`);
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
            <div id='wa'>
              <WhatsappShareButton url={'https://www.example.com'} quote={'Dummy text!'} hashtag="#muo" >
              <IoLogoWhatsapp size={32} round />
              </WhatsappShareButton>
            </div>
            <div id='twt'>
              <TwitterShareButton url={'https://www.example.com'} quote={'Dummy text!'} hashtag="#muo" >
              <IoLogoTwitter size={32} round />
              </TwitterShareButton>
            </div>
            <div id='FB'>
              <FacebookShareButton url={'https://www.example.com'} quote={'Dummy text!'} hashtag="#muo" >
              <IoLogoFacebook size={32} round />
              </FacebookShareButton>
            </div>
          </div>
          <figure class="hero-banner art-img">
            <img src={article.image} alt="Equitable Transportation, Savior(s) of Safe Mobility in Our Society" />
          </figure>
          <div class="para-artikel">
            <p>{article.one}</p>
            <br />
            <p>{article.two}</p>
            <br />
            <p>{article.three}</p>
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

export default ArticleDetail