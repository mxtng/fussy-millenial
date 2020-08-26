import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";

import Landing from "../../components/layout/landing/Landing";
import Alert from "../../components/alert/Alert";

import { showAlert, hideAlert } from "../../redux/actions/alert";
import { ingredientSearch } from "../../redux/actions/recipe";
import { recipeRequest } from "../../redux/actions/recipe";
import data from "../recipes/data";

import "./Main.scss";

const Main = ({
  ingredientSearch,
  showAlert,
  hideAlert,
  history,
  loading,
  recipeRequest,
}) => {
  const [ingredientList, setIngredientList] = useState("");

  const onChange = (e) => {
    setIngredientList(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (ingredientList) {
      ingredientSearch(ingredientList);
      recipeRequest(data);
      return history.push("/recipes");
    }
    showAlert("Please enter ingredients");
  };

  useEffect(() => {
    return () => {
      hideAlert();
    };
  }, [hideAlert, loading]);

  return (
    <Fragment>
      <Landing />
      <div className="main-page">
        <Alert />
        <h1 className="title">Fussy Millenial</h1>

        <form className="search-field" onSubmit={onSubmit}>
          <div className="input-group">
            <input
              type="search"
              name="search"
              className="form-control"
              placeholder="Search ingredients"
              onChange={onChange}
            />
            <button className="btn btn-secondary">Search</button>
          </div>
        </form>
        <p className="search-example">e.g. chicken, mushroom, onions...</p>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ recipe: { loading } }) => ({
  loading,
});

export default connect(mapStateToProps, {
  ingredientSearch,
  showAlert,
  hideAlert,
  recipeRequest,
})(Main);
