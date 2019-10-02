import React from "react";
import { Link } from "react-router-dom";
import "./assets/e404.css";
class E404 extends React.Component {
  render() {
    return (
      <div className="error404">
        <h1>Page not found</h1>
        <h4>
          Start from
          <Link to="/genres"> genres</Link>
        </h4>
      </div>
    );
  }
}

export default E404;
