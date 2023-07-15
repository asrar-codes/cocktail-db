import React from "react";
import { useRouteError } from "react-router-dom";

const SingePageError = () => {
  const error = useRouteError();
  console.log("error is from singe Page error");

  return (
    <section>
      <h2>{error.message}</h2>
    </section>
  );
};

export default SingePageError;
