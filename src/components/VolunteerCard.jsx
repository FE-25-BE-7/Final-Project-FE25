import React from 'react';
import { IoChevronForward, IoCalendar, IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

const VolunteerCard = ({ volunteer }) => {
  return (
    <div className="article-card">
        <figure className="article-banner">
          <img src={volunteer.image} alt="Equitable Transportation, Savior(s) of Safe Mobility in Our Society" />
        </figure>
        <div className="article-meta">
          <span>
            <IoCalendar />
            <time datetime={volunteer.date}>{volunteer.date}</time>
          </span>
          <span>
            <IoPerson />
            <p>{volunteer.author}</p>
          </span>
        </div>
        <h3 className="article-title">{volunteer.title}</h3>
        <p className="article-text">{volunteer.description}</p>
        <Link to={`/program/2/${volunteer.id}`} className="article-link-btn">
          <span>Ikuti Sekarang</span>
          <IoChevronForward />
        </Link>
    </div>
    
  );
};

export default VolunteerCard;