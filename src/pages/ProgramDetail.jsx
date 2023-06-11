import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import {IoLogoFacebook, IoLogoTwitter, IoLogoWhatsapp} from 'react-icons/io';
// import {FacebookShareButton, TwitterShareButton, WhatsappShareButton}from 'react-share';

const ProgramDetail = () => {
  const { id } = useParams();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const response = await axios.get(`https://648413ddee799e321626422f.mockapi.io/ProgramList/${id}`);
        setProgram(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProgram();
  }, [id]);

  if (!program) {
    return <div>Loading...</div>;
  }

  return (
    <section class="section article-detail">
      <div class="container">
          <h2 class="program-title">{program.title}</h2>
          <h2 class="program-sub">{program.sub_title}</h2>
          <h2 class="program-text">{program.description}</h2>
      </div>
    </section>
  );
};

export default ProgramDetail;