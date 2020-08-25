import React from 'react';
import './Favourites.scss';
import { connect } from 'react-redux';

const Favourites = ({ favouriteRecipes }) => {
	return (
		<div className="favourite-page">
			<div className="recipe-search">
				<h2 className="title">Favourite Recipes</h2>
			</div>
			<div className="recipe-list container-xl">No Favourite Recipes Found</div>
		</div>
	);
};

const mapStateToProps = ({ favourite: { favouriteRecipes } }) => ({
	favouriteRecipes
});

export default connect(mapStateToProps)(Favourites);
