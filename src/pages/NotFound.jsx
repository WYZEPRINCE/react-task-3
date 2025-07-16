import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 Not Found</h1>
      <p className="text-red-500">The page you're looking for doesn't exist.</p>
      <p>
        Go back to the <Link to="/">home page</Link>.
      </p>
    </div>
  );
};

export default NotFound;
