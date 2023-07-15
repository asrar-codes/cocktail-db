import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";

const CocktailsContainer = () => {
  const { loading, error, cocktails, cocktailComponentProps } =
    useGlobalContext();

  return (
    <section className="cocktails-center   p-4   my-6 w-11/12 mx-auto ">
      {loading && <h2>Loading...</h2>}
      {error && <h2>There was an error...</h2>}
      <div className=" grid grid-cols-custom gap-4 ">
        {cocktails.map((cocktail) => {
          {
            /* console.log(cocktail); */
          }
          const {
            idDrink: id,
            strDrink: title,
            strGlass: name,
            strAlcoholic: alcoholic,
            strDrinkThumb: img,
          } = cocktail;
          const cocktailComponentProps = {
            id,
            title,
            title,
            name,
            alcoholic,
            img,
          };
          const {
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strInstructions,
            strCategory,
          } = cocktail;

          return <Cocktail key={id} {...cocktailComponentProps} />;
        })}
      </div>
    </section>
  );
};

export default CocktailsContainer;
