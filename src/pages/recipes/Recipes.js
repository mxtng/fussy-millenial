import React, { Fragment, useState, useEffect } from 'react';
import './Recipes.scss';
import { connect } from 'react-redux';

import findIngredients from '../../redux/actions/searchAction';
import showAlert from '../../redux/actions/showAlert';
import hideAlert from '../../redux/actions/hideAlert';
import { recipeRequest } from '../../redux/actions/recipe';

import RecipeItem from '../../components/recipe-item/RecipeItem';

const Recipes = ({ loading, ingredients, findIngredients, recipeRequest, showAlert, alert, hideAlert }) => {
	const onClickFavourite = () => {
		console.log('Favourite Btn Clicked');
	};
	const onClickDetail = () => {
		console.log('Detail Btn Clicked');
	};

	const [ searchInput, setSearchInput ] = useState('');

	const onChange = (e) => {
		setSearchInput(e.target.value);
	};

	const findRecipes = () => {
		if (searchInput) {
			recipeRequest();
			return findIngredients(searchInput);
		}
		showAlert('Please enter ingredients');
	};

	useEffect(
		() => {
			console.log(loading);
			if (ingredients) return setSearchInput(ingredients);

			return () => {
				hideAlert();
			};
		},
		[ ingredients, hideAlert, loading ]
	);

	return (
		<div className="recipe-page">
			<div className="recipe-search">
				{!alert ? (
					''
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
				<button type="button" className="btn btn-secondary mt-2" onClick={findRecipes}>
					Search
				</button>
			</div>

			<div className="recipe-list container-xl">
				{!loading ? (
					<div>
						{/* <div className="spinner-border" role="status" style={{ width: '4rem', height: '4rem' }}>
							<span className="sr-only">Loading...</span>
						</div>
						Loading... */}
					</div>
				) : (
					<Fragment>
						<RecipeItem />
						<RecipeItem />
						<RecipeItem />
						<RecipeItem />
					</Fragment>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = ({ search: { ingredients }, recipe: { loading }, alert: { alert } }) => ({
	ingredients,
	loading,
	alert
});

export default connect(mapStateToProps, { findIngredients, showAlert, hideAlert, recipeRequest })(Recipes);
