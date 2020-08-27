import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { ingredientSearch, recipeRequest } from "../../redux/actions/recipe";
import { showAlert, hideAlert } from "../../redux/actions/alert";

import data from "../../pages/recipes/data";
import { withRouter } from "react-router-dom";

import './Search.scss';

const Search = ({
  ingredients,
  ingredientSearch,
  recipeRequest,
  showAlert,
  hideAlert,
  history,
  location,
}) => {
  const [ingredientList, setIngredientList] = useState("");

  useEffect(() => {
    if (ingredients) return setIngredientList(ingredients);
  }, [ingredients]);

  useEffect(() => {
    return () => {
      hideAlert();
    };
  }, [hideAlert]);

  const onChange = (e) => {
    setIngredientList(e.target.value);
  };

  const findRecipe_test = () => {
    if (!ingredientList) return showAlert("Please enter ingredients");

    ingredientSearch(ingredientList);
    recipeRequest(data);
    if (location.pathname === "/") {
      return history.push("/recipes");
    }
  };

  return (
    <div className="search">
        <input
          type="search"
          name="search"
          className="form-control"
          placeholder="Search ingredients"
          onChange={onChange}
          value={ingredientList}
        />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={findRecipe_test}
        >
          Search
        </button>
    </div>
  );
};

const mapStateToProps = ({ recipe: { ingredients } }) => ({
  ingredients,
});

export default connect(mapStateToProps, {
  ingredientSearch,
  recipeRequest,
  showAlert,
  hideAlert,
})(withRouter(Search));
