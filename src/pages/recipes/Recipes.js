import React, { Fragment, useEffect } from "react";
import "./Recipes.scss";
import { connect } from "react-redux";

import Alert from "../../components/alert/Alert";
import Search from "../../components/search/Search";
import Spinner from "../../components/spinner/Spinner";

import {
  recipeSuccess,
  updateFavourite,
  removeFavourite,
} from "../../redux/actions/recipe";
import RecipeItem from "../../components/recipe-item/RecipeItem";

const Recipes = ({ loading, recipes, recipeSuccess, updateFavourite }) => {
  useEffect(() => {
    if (recipes.length > 0) {
      recipeSuccess();
    }
  }, [recipes, recipeSuccess]);

  const favClick = (id) => {
    console.log(id);
    updateFavourite(id);
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
            {recipes.map((props) => (
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
                  onClick={() => console.log("clicked Detail")}
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

const mapStateToProps = ({ recipe: { loading, ingredients, recipes } }) => ({
  loading,
  ingredients,
  recipes,
});

export default connect(mapStateToProps, {
  recipeSuccess,
  updateFavourite,
  removeFavourite,
})(Recipes);
