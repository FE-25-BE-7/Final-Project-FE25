import React, { useEffect, useState } from 'react';
import { IoChevronForward } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const ProgramCardHome = ({ program }) => {
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
      <li>
        <div className="program-card">
          <div className="card-icon">
            <img src={program.image_two} className="card-icon" />
          </div>
          <h3 className="h3 card-title">{program.title}</h3>
          <p className="card-text">{program.description} </p>
          {!isLoggedIn ? (
            <Link to={`/login`} className="card-link" onClick={handleClick}>
            <span>{program.link_name}</span>
            <IoChevronForward />
            </Link>
          ) : (
            <Link to={`/program`} className="card-link" onClick={handleClick} reloadDocument>
            <span>{program.link_name}</span>
            <IoChevronForward />
          </Link>
          )}
        </div>
      </li>
    );
  };

export default ProgramCardHome;