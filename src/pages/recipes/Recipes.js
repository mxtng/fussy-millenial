import React, { Fragment, useState, useEffect } from "react";
import "./Recipes.scss";
import { connect } from "react-redux";
import { showAlert, hideAlert } from "../../redux/actions/alert";
import {
  ingredientSearch,
  recipeRequest,
  recipeSuccess,
  updateFavourite,
  removeFavourite,
} from "../../redux/actions/recipe";
import RecipeItem from "../../components/recipe-item/RecipeItem";
import data from "./data";

const Recipes = ({
  loading,
  ingredients,
  ingredientSearch,
  recipes,
  recipeRequest,
  recipeSuccess,
  updateFavourite,
  alert,
  showAlert,
  hideAlert,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const findRecipes = () => {
    if (searchInput) {
      ingredientSearch(searchInput);
      return recipeRequest(data);
    }
    showAlert("Please enter ingredients");
  };

  useEffect(() => {
    if (ingredients) return setSearchInput(ingredients);

    return () => {
      hideAlert();
    };
  }, [ingredients, hideAlert]);

  useEffect(() => {
    if (recipes.length > 0) {
      recipeSuccess();
    }
  }, [recipes, recipeSuccess]);

  const favClick = (id) => {
    updateFavourite(id);
  };

  return (
    <div className="recipe-page">
      <div className="recipe-search">
        {!alert ? (
          ""
        ) : (
          <div className="alert alert-danger" role="alert">
            Ingredients missing
          </div>
        )}
        <h2 className="title">Recipe search:</h2>
        <input
          type="search"
          className="search-input"
          placeholder="Search ingredients for recipes"
          onChange={onChange}
          value={searchInput}
        />
        <button
          type="button"
          className="btn btn-secondary mt-2"
          onClick={findRecipes}
        >
          Search
        </button>
      </div>

      <div className="recipe-list container-xl">
        {loading ? (
          <div>
            <div
              className="spinner-border"
              role="status"
              style={{ width: "4rem", height: "4rem" }}
            >
              <span className="sr-only">Loading...</span>
            </div>
            Loading...
          </div>
        ) : recipes.length === 0 ? (
          "No recipes found. Please search ingredients."
        ) : (
          <Fragment>
            {recipes.map(({ id, ...otherProps }) => (
              <RecipeItem key={id} {...otherProps}>
                <button
                  type="button"
                  name="favourite"
                  className="btn btn-secondary"
                  onClick={() => favClick(otherProps)}
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

const mapStateToProps = ({
  recipe: { loading, ingredients, recipes },
  alert: { alert },
}) => ({
  ingredients,
  loading,
  alert,
  recipes,
});

export default connect(mapStateToProps, {
  showAlert,
  hideAlert,
  ingredientSearch,
  recipeRequest,
  recipeSuccess,
  updateFavourite,
  removeFavourite,
})(Recipes);
