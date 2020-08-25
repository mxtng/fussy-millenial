import React, { Fragment, useEffect } from 'react';
import './Favourites.scss';
import { connect } from 'react-redux';

import RecipeItem from '../../components/recipe-item/RecipeItem';

const Favourites = ({ loading, favouriteRecipes }) => {
	const removeFavourite = () => {
		console.log('Remove Favourite Btn Clicked');
	};
	const onClickDetail = () => {
		console.log('Detail Btn Clicked');
	};

	useEffect(
		() => {
			console.log(loading);
		},
		[ loading ]
	);

	return (
		<div className="favourite-page">
			<div className="recipe-search">
				<h2 className="title">Favourite Recipes</h2>
			</div>
			<div className="recipe-list container-xl">
				{!favouriteRecipes ? (
					<div>
						{/* <div className="spinner-border" role="status" style={{ width: '4rem', height: '4rem' }}>
							<span className="sr-only">Loading...</span>
						</div>
						Loading... */}
						<p>No favourite recipes found</p>
					</div>
				) : (
					<Fragment>
						<RecipeItem />
						<RecipeItem />
						<RecipeItem />
					</Fragment>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = ({ favourite: { favouriteRecipes } }) => ({
	favouriteRecipes
});

export default connect(mapStateToProps)(Favourites);
