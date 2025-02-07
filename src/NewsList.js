
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
   const [page, setPage] = useState(1);
   const articlesPerPage = 6;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=8c73420e0c7f450a828621cb2540fdeb`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const startIndex = (page - 1) * articlesPerPage;
  const paginatedArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  return (
    <>
    <Container>
       
      
      <div className="row">
        {paginatedArticles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
          <div className="card">
          <img src={article.urlToImage} className="card-img-top" alt={article.title} />
              <div className="card-body">
             <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
       </div>
         </div>
          </div>
        ))}
      </div>

    
      <div className="d-flex justify-content-center mt-1">
        <Pagination>
          {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }).map((_, i) => (
          <Pagination.Item key={i} active={i + 1 === page} onClick={() => setPage(i + 1)}>
              {i + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </Container>
    </>
  );
};

export default NewsList;

