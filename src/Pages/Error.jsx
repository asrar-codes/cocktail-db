import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  console.log(error);
  if (error.status === 404) {
    return (
      <section className="error-page">
        <h1>Ohh!</h1>
        <h4>The page you're looking for doesn't exit</h4>
        <Link className="btn" to="/">
          back Home
        </Link>
      </section>
    );
  }
  return (
    <div className="error">
      <h2>Something went wrong!..</h2>
    </div>
  );
};

export default Error;
