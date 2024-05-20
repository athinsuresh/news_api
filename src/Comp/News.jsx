import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        if (!apiKey) {
          throw new Error('API key is missing');
        }

        const cacheKey = `news-${category}`;
        const cachedData = localStorage.getItem(cacheKey);
        const cacheTTL = 600000; // 10 minutes in milliseconds

        if (cachedData) {
          const { timestamp, articles } = JSON.parse(cachedData);

          if (Date.now() - timestamp < cacheTTL) {
            setArticles(articles);
            setLoading(false);
            return;
          }
        }

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        console.log(`Fetching from URL: ${url}`);

        const response = await fetch(url);
        console.log(`Response status: ${response.status}`);

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error details:', errorData);
          throw new Error(`Network response was not ok: ${response.statusText} - ${errorData.message}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);
        setArticles(data.articles);

        // Store data in localStorage
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ timestamp: Date.now(), articles: data.articles })
        );
      } catch (error) {
        console.error('Fetching news failed:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4" style={{ borderBottom: '2px solid black', paddingBottom: '10px' }}>
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="row">
        {articles.map((news, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
            <NewsCard
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
