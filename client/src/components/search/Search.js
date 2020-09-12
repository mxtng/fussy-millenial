import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showAlert, hideAlert } from "../../redux/actions/alert";
import { fetchRecipes } from "../../redux/actions/recipe";

import "./Search.scss";

const Search = ({
  history,
  location,
  loading,
  showAlert,
  hideAlert,
  fetchRecipes,
  ingredients,
}) => {
  // Initialize user ingredient search state
  const [ingredientList, setIngredientList] = useState("");

  // Subscribe user ingredient search
  useEffect(() => {
    if (ingredients) return setIngredientList(ingredients);

    !loading && setIngredientList("");
  }, [loading, ingredients]);

  // Unsubscribe alert
  useEffect(() => {
    return () => {
      hideAlert();
    };
  }, [hideAlert]);

  const onChange = (e) => {
    setIngredientList(e.target.value);
  };

  const clickSearch = () => {
    if (!ingredientList) return showAlert("Please enter ingredients");
    fetchRecipes(ingredientList);

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
      <button type="button" className="btn btn-secondary" onClick={clickSearch}>
        Search
      </button>
    </div>
  );
};

const mapStateToProps = ({ recipe: { loading, ingredients } }) => ({
  loading,
  ingredients,
});

export default connect(mapStateToProps, {
  fetchRecipes,
  showAlert,
  hideAlert,
})(withRouter(Search));
