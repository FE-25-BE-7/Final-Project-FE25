import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProgramCard from './ProgramCard';

const ProgramsList = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get('https://648413ddee799e321626422f.mockapi.io/ProgramList');
        setPrograms(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <div className='container'>
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
};

export default ProgramsList;