import React, { useState } from 'react';
import { IoCalendar, IoPerson } from "react-icons/io5";
import { Link} from "react-router-dom";
import Swal from 'sweetalert2';

const VolunteerCard = ({ volunteer, onSelect, isJoined, onJoin }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Selamat! Kamu berhasil bergabung menjadi relawan!',
        showConfirmButton: false,
        timer: 1000
      })
    if (!isJoined) {
      onSelect(volunteer);
      onJoin(volunteer.id);
    }
  };

  return (
    <div className="article-card">
      <figure className="program-banner">
        <img src={volunteer.image} alt="Equitable Transportation, Savior(s) of Safe Mobility in Our Society" />
      </figure>
      <div className="article-meta">
        <span>
          <IoCalendar />
          <div>{volunteer.date}</div>
        </span>
        <span>
          <IoPerson />
          <p>{volunteer.organizer}</p>
        </span>
      </div>
      <h3 className="article-title">{volunteer.title}</h3>
      <p className="article-text">{volunteer.description}</p>
      <p className="article-text">Status: {isJoined ? 'Sudah Bergabung' : 'Belum Bergabung'}</p>
      <div className='btn-volu'>
      <Link onClick={handleClick} disabled={isJoined} className={isJoined ? 'btn-disabled' : 'btn-join'}>
        {isJoined ? 'Sudah Bergabung' : 'Ikuti Sekarang'}
      </Link>
      </div>
    </div> 
  );
};

export default VolunteerCard;