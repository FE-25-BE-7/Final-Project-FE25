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
        const response = await axios.get(`https://final-project-be7-production-b776.up.railway.app/api/artikel/${id}`);
        setArticle(response.data.data[0]);
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
    <section className="section article-detail" id="article">
      <div className="container">
        <br />
          <h2 className="section-title">{article.title}</h2>
          <div>
            <h5 className="penulis">{article.author}</h5>
            <h5 className="penulis">{article.date}</h5>
          </div>
          <div className="share-sosmed">
            <div id='wa'>
              <WhatsappShareButton url={'https://www.greenpeace-FE25-BE7.com'} quote={'Share Artikel!'} hashtag="#muo" >
              <IoLogoWhatsapp size={32} round />
              </WhatsappShareButton>
            </div>
            <div id='twt'>
              <TwitterShareButton url={'https://www.greenpeace-FE25-BE7.com'} quote={'Share Artikel!'} hashtag="#muo" >
              <IoLogoTwitter size={32} round />
              </TwitterShareButton>
            </div>
            <div id='FB'>
              <FacebookShareButton url={'https://www.greenpeace-FE25-BE7.com'} quote={'Share Artikel!'} hashtag="#muo" >
              <IoLogoFacebook size={32} round />
              </FacebookShareButton>
            </div>
          </div>
          <figure className="hero-banner art-img">
            <img src={article.image} />
          </figure>
          <div className="para-artikel">
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

export default ArticleDetail;