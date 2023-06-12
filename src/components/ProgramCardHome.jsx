import React from 'react';
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProgramCardHome = ({ program }) => {
    return (
        <li>
        <div className="program-card">
          <div className="card-icon">
            <img src={program.img} className="card-icon" />
          </div>
          <h3 className="h3 card-title">{program.title}</h3>
          <p className="card-text">{program.description} </p>
          <Link to={`/program`} className="card-link">
            <span>{program.link_name}</span>
            <IoChevronForward />
          </Link>
        </div>
        </li>
    );
  };

export default ProgramCardHome;