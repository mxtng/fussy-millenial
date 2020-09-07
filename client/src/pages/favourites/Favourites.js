import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import RecipeItem from "../../components/recipe-item/RecipeItem";
import {
  deleteFavourite,
  deleteUserFavourite,
} from "../../redux/actions/favourite";

import "./Favourites.scss";

const Favourites = ({
  authenticated,
  favourites,
  deleteFavourite,
  deleteUserFavourite,
}) => {
  const clickRemove = (recipeId) => {
    if (!authenticated) {
      return deleteFavourite(recipeId);
    }

    deleteUserFavourite(recipeId);
  };

  return (
    <div className="favourite-page">
      {!authenticated && (
        <p className="warning alert alert-danger">
          <Link to="/signin">Sign in</Link> to save favourite recipes
        </p>
      )}
      <h2 className="title">Favourite Recipes</h2>
      <div className="recipe-list container-xl">
        {favourites.length > 0 ? (
          favourites.map((item) => (
            <RecipeItem key={item.id} {...item}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => clickRemove(item.id)}
              >
                Remove
              </button>
              <button
                type="button"
                name="favourite"
                className="btn btn-secondary"
                onClick={() => console.log("Detail Button Clicked")}
              >
                Details
              </button>
            </RecipeItem>
          ))
        ) : (
          <p>No favourite recipes found.</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({
  auth: { authenticated },
  favourite: { favourites },
}) => ({
  authenticated,
  favourites,
});

export default connect(mapStateToProps, {
  deleteFavourite,
  deleteUserFavourite,
})(Favourites);
