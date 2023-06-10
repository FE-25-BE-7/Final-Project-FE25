import React from 'react';
import { IoCalendar, IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProgramCard = ({ program }) => {
    return (
      <div className="blog-card">
        <div className='meta'>
          <img src={program.image} className='photo'/>
          <ul className="details">
              <li className="author"><IoPerson />{program.person}</li>
              <li className="date"><IoCalendar />{program.date}</li>
          </ul>
        </div>
        <div className="description">
          <h1>{program.title}</h1>
          <h2>{program.sub_title}</h2>
          <p>{program.description}</p>
          <p className='read-more'>
            <Link to={`/programs/${program.id}`}>{program.link_name}</Link>
          </p>
        </div>
      </div>
    );
  };

export default ProgramCard;