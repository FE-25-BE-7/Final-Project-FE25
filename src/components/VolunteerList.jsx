import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VolunteerCard from './VolunteerCard';

const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get('https://6454d140f803f34576320f15.mockapi.io/gp/article');
        setVolunteers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVolunteers();
  }, []);

  return (
    <div className="container">
      <div className="article-list">
        {volunteers.map(volunteer => (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} />
        ))}
      </div>
    </div>
  );
};

export default VolunteerList;