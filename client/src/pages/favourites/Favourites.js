import React from "react";
import "./Favourites.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import RecipeItem from "../../components/recipe-item/RecipeItem";

import { removeFavourite } from "../../redux/actions/recipe";

const Favourites = ({ authenticated, favourites, removeFavourite }) => {
  const clickRemove = (id) => {
    removeFavourite(id);
  };

  return (
    <div className="favourite-page">
      {!authenticated && (
        <p className='warning alert alert-danger'>
          <Link to="/signin">Sign in</Link> to save favourite recipes
        </p>
      )}
      <h2 className="title">Favourite Recipes</h2>
      <div className="recipe-list container-xl">
        {favourites.length > 0 ? (
          favourites.map((item, index) => (
            <RecipeItem key={index} {...item}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => clickRemove(index)}
              >
                Remove
              </button>
              <button
                type="button"
                name="favourite"
                className="btn btn-secondary"
                onClick={() => console.log("clicked Detail")}
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
  recipe: { favourites },
}) => ({
  authenticated,
  favourites,
});

export default connect(mapStateToProps, { removeFavourite })(Favourites);
