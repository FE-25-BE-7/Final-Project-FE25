import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemsCard from './ItemsCard';

const ItemsList = ({ apiUrl }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(apiUrl);
        setArticles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, [apiUrl]);

  return (
    <div className="article-list">
        {articles.map(article => (
          <ItemsCard key={article.id} article={article} />
        ))}
    </div>
  );
};

export default ItemsList;