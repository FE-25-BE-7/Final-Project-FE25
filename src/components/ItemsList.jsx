import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemsCard from './ItemsCard';

const ItemsList = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="user-box">
        <input type="text" placeholder="Cari Artikel" value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="article-list">
        {filteredArticles.map(article => (
          <ItemsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;