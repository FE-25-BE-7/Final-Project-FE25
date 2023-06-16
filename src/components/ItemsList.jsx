import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemsCard from './ItemsCard';

const ItemsList = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://final-project-be7-production-b776.up.railway.app/api/artikel');
        setArticles(response.data.data);
      } catch (error) {
        setError('Error fetching data');
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

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div className="container">
      <div className="user-box">
        <input type="text" placeholder="Cari Artikel..." value={searchTerm} onChange={handleSearch} />
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