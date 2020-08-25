import React, { Fragment, useState, useEffect } from 'react';
import './Recipes.scss';
import { connect } from 'react-redux';

import findIngredients from '../../redux/actions/searchAction';
import showAlert from '../../redux/actions/showAlert';
import hideAlert from '../../redux/actions/hideAlert';
import { recipeRequest, recipeSuccess, recipeClear } from '../../redux/actions/recipe';

import RecipeItem from '../../components/recipe-item/RecipeItem';

import data from './data';

const Recipes = ({
	loading,
	ingredients,
	findIngredients,
	recipeRequest,
	recipeSuccess,
	recipeClear,
	showAlert,
	alert,
	hideAlert,
	recipes
}) => {
	const [ searchInput, setSearchInput ] = useState('');

	const onChange = (e) => {
		setSearchInput(e.target.value);
	};

	const findRecipes = () => {
		if (searchInput) {
			recipeClear();
			recipeRequest(data);
			return findIngredients(searchInput);
		}
		showAlert('Please enter ingredients');
	};

	useEffect(
		() => {
			if (ingredients) return setSearchInput(ingredients);

			return () => {
				hideAlert();
			};
		},
		[ ingredients, hideAlert ]
	);

	useEffect(
		() => {
			if (recipes.length > 0) {
				recipeSuccess();
			}
		},
		[ recipes, recipeSuccess ]
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
				{loading ? (
					<div>
						<div className="spinner-border" role="status" style={{ width: '4rem', height: '4rem' }}>
							<span className="sr-only">Loading...</span>
						</div>
						Loading...
					</div>
				) : recipes.length === 0 ? (
					'No Recipes found'
				) : (
					<Fragment>
						{recipes.map(({ id, ...otherProps }) => (
							<RecipeItem key={id} {...otherProps}>
								<button
									type="button"
									className="btn btn-secondary"
									onClick={() => console.log('clicked Fav')}
								>
									Favourite
								</button>
								<button
									type="button"
									className="btn btn-secondary"
									onClick={() => console.log('clicked Detail')}
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

const mapStateToProps = ({ search: { ingredients }, recipe: { loading, recipes }, alert: { alert } }) => ({
	ingredients,
	loading,
	alert,
	recipes
});

export default connect(mapStateToProps, {
	findIngredients,
	showAlert,
	hideAlert,
	recipeRequest,
	recipeSuccess,
	recipeClear
})(Recipes);
