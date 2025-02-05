import React, { useEffect, useState } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2025-01-05&sortBy=publishedAt&apiKey=8c73420e0c7f450a828621cb2540fdeb"
    )
      .then((response) =>response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div>
      <h2>Latest Tesla News</h2>
      {articles.length === 0 ? <p>Loading...</p> : null}
      {articles.map((article, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px " }}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <img src={article.urlToImage} alt="News" style={{ width: "30%", maxHeight: "400px", objectFit: "cover" }} />

          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default News;
