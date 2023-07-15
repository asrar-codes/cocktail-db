import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const url = `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`;

const SingleCocktail = ({}) => {
  /* const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strInstructions,
    strCategory,
  } = cocktailPageProps; */
  const fetchSingleCocktail = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchSingleCocktail();
  }, []);
  return (
    <div>
      <Link to="/" className="text-orange-600">
        Back to home
      </Link>

      <div className="info-container">
        <p>
          Name: <span></span>
        </p>
        <p>{}</p>
      </div>
    </div>
  );
};

export default SingleCocktail;
