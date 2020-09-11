import React, { Fragment } from "react";
import { connect } from "react-redux";
import Alert from "../../components/alert/Alert";
import Search from "../../components/search/Search";
import Spinner from "../../components/spinner/Spinner";
import RecipeItem from "../../components/recipe-item/RecipeItem";
import {
  updateFavourite,
  updateUserFavourite,
} from "../../redux/actions/favourite";

import "./Recipes.scss";

const Recipes = ({
  authenticated,
  loading,
  recipes,
  updateFavourite,
  updateUserFavourite,
}) => {
  const favClick = (recipe) => {
    // Rename id to recipeId
    recipe.recipeId = recipe.id;
    delete recipe.id;

    // Update guest favourite recipes
    if (!authenticated) {
      return updateFavourite(recipe);
    }

    updateUserFavourite(recipe);
  };

  return (
    <div className="recipe-page">
      <div className="recipe-search">
        <h2 className="title">Recipe search:</h2>
        <Alert />
        <Search />
      </div>

      <div className="recipe-list container-xl">
        {loading ? (
          <Spinner />
        ) : recipes.length === 0 ? (
          "No recipes found. Please search ingredients."
        ) : (
          <Fragment>
            {recipes[0].map((props) => (
              <RecipeItem key={props.id} {...props}>
                <button
                  type="button"
                  name="favourite"
                  className="btn btn-secondary"
                  onClick={() => favClick(props)}
                >
                  Favourite
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => console.log("Detail Button Clicked")}
                >
                  Details
                </button>
              </RecipeItem>
            ))}
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({
  auth: { authenticated },
  recipe: { loading, ingredients, recipes },
}) => ({
  authenticated,
  loading,
  ingredients,
  recipes,
});

export default connect(mapStateToProps, {
  updateFavourite,
  updateUserFavourite,
})(Recipes);
