import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemsCard from './ItemsCard';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://final-project-be7-production-b776.up.railway.app/api/artikel');
        setArticles(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className='container'>
      <div className="article-list">
        {articles.slice(0, 3).map((article) => (
          <ItemsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;