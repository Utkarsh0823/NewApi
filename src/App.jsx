import React from "react";
import NewsList from "./NewsList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <h1 className="text-center">Latest Tesla News</h1>

      <NewsList />
    </div>
  );
}

export default App;
