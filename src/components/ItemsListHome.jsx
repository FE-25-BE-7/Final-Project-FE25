import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemsCard from './ItemsCard';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://6454d140f803f34576320f15.mockapi.io/gp/article');
        setArticles(response.data);
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
