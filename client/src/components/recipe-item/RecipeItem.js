import React, { Fragment } from "react";
import "./RecipeItem.scss";

const RecipeItem = ({
  image,
  title,
  usedIngredients: ingredients,
  missedIngredients: others,
  children,
}) => {
  return (
    <Fragment>
      <div className="recipe-item">
        <img className="card-img-top" src={image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6>Primary ingredients:</h6>
          <ul>
            {ingredients.map(({ name }, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          <h6>Other ingredients:</h6>
          <ul>
            {others.map(({ name }, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>

          <div className="btn-blocks">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeItem;
