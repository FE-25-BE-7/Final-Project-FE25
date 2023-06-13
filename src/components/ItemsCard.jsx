import React from 'react';
import { IoChevronForward, IoCalendar, IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

const ItemsCard = ({ article }) => {
  return (
    <div className="article-card">
        <figure className="article-banner">
          <img src={article.image} />
        </figure>
        <div className="article-meta">
          <span>
            <IoCalendar />
            <time datetime={article.date}>{article.date}</time>
          </span>
          <span>
            <IoPerson />
            <p>{article.author}</p>
          </span>
        </div>
        <h3 className="article-title">{article.title}</h3>
        <p className="article-text">{article.description}</p>
        <Link to={`/artikel/${article.id}`} className="article-link-btn">
          <span>Selengkapnya</span>
          <IoChevronForward />
        </Link>
    </div>
    
  );
};

export default ItemsCard;