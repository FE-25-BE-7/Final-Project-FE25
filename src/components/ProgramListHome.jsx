import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProgramCardHome from './ProgramCardHome';

const ProgramsListHome = () => {
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
      <div className="program-list">
        {programs.map((program) => (
          <ProgramCardHome key={program.id} program={program} />
        ))}
      </div>
  );
};

export default ProgramsListHome;