import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VolunteerCard from './VolunteerCard';

const VolunteerList = () => {
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [message, setMessage] = useState('');
  const [joinedVolunteerIds, setJoinedVolunteerIds] = useState([]);
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await axios.get('https://final-project-be7-production-b776.up.railway.app/api/program');
        setVolunteers(response.data.data);
      } catch (error) {
        console.error('Error fetching volunteers:', error);
      }
    };

    fetchVolunteers();
  }, []);

  useEffect(() => {
    const storedJoinedVolunteerIds = localStorage.getItem('joinedVolunteerIds');
    if (storedJoinedVolunteerIds) {
      setJoinedVolunteerIds(JSON.parse(storedJoinedVolunteerIds));
    }
  }, []);

  const handleJoin = (volunteerId) => {
    setMessage('Joining the volunteer program...');
    setJoinedVolunteerIds((prevIds) => [...prevIds, volunteerId]);
    localStorage.setItem(
      'joinedVolunteerIds',
      JSON.stringify([...joinedVolunteerIds, volunteerId])
    );
  };

  return (
    <div className="container">
      <div className="article-list">
        {volunteers.map((volunteer) => (
          <VolunteerCard
            key={volunteer.id}
            volunteer={volunteer}
            isSelected={volunteer === selectedVolunteer}
            onSelect={setSelectedVolunteer}
            isJoined={joinedVolunteerIds.includes(volunteer.id)}
            onJoin={handleJoin}
          />
        ))}
      </div>
    </div>
  );
};

export default VolunteerList;