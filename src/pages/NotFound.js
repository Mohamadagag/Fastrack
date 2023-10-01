import React from "react";
import "../styles/NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404 Page Not Found !</h1>
      <p>
        return to{" "}
        <span>
          <Link to="/">Home</Link>
        </span>
      </p>
    </div>
  );
};

export default NotFound;
