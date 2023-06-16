import React, { useEffect, useState } from 'react';
import { IoCalendar, IoPerson } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const ProgramCard = ({ program }) => {
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
    <div className="blog-card">
      <div className='meta'>
        <img src={program.image_one} className='photo'/>
        <ul className="details">
            <li className="author"><IoPerson />{program.organizer}</li>
            <li className="date"><IoCalendar />{program.date}</li>
        </ul>
      </div>
      <div className="description">
        <h1>{program.title}</h1>
        <h2>{program.sub_title}</h2>
        <p>{program.description}</p>
        {!isLoggedIn ? (
          <p className='read-more'>
            <Link to={`/login`} onClick={handleClick}>{program.link_name}</Link>
          </p>
        ) :(
          <p className='read-more'>
            <Link to={`/program/${program.id}`} onClick={handleClick} reloadDocument>{program.link_name}</Link>
          </p>
        )}
      </div>
    </div>
    );
  };

export default ProgramCard;