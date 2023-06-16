import React, { useState, useEffect } from 'react';
import { IoChevronForward, IoCalendar, IoPerson } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const ItemsCard = ({ article }) => {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const handleClick = () => {
    setClick(!click);
    if (isLoggedIn) {
      navigate('/artikel/${article.id}')
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Kamu harus Login terlebih dalulu!',
        showConfirmButton: false,
        timer: 1000
      }).then(() => {
        navigate('/login');
        window.location.reload();
      });
    }
  }; 

  return (
    <div className="article-card">
        <figure className="article-banner">
          <img src={article.image} />
        </figure>
        <div className="article-meta">
          <span>
            <IoCalendar />
            <div>{article.date}</div>
          </span>
          <span>
            <IoPerson />
            <p>{article.author}</p>
          </span>
        </div>
        <h3 className="article-title">{article.title}</h3>
        <p className="article-text">{article.description}</p>
        {!isLoggedIn ? (
          <Link to={`/login`} className="article-link-btn" onClick={handleClick}>
          <span>Selengkapnya</span>
          <IoChevronForward />
        </Link>
        ) : (
        <Link to={`/artikel/${article.id}`} className="article-link-btn" onClick={handleClick} reloadDocument>
          <span>Selengkapnya</span>
          <IoChevronForward />
        </Link> )}
    </div>
    
  );
};

export default ItemsCard;