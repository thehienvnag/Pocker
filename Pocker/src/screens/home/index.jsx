import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1 className="display-3">Welcome!</h1>
      <Link to="/game" className="btn btn-success">
        Play game
      </Link>
    </div>
  );
};

export default Home;
