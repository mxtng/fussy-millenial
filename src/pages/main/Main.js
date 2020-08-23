import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import findIngredients from '../../redux/actions/searchAction';
import showAlert from '../../redux/actions/showAlert';
import hideAlert from '../../redux/actions/hideAlert';
import { recipeRequest } from '../../redux/actions/recipe';

import './Main.scss';

const Main = ({ findIngredients, showAlert, hideAlert, alert, history, loading, recipeRequest }) => {
	const [ ingredientList, setIngredientList ] = useState('');

	const onChange = (e) => {
		setIngredientList(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (ingredientList) {
			findIngredients(ingredientList);
			recipeRequest();
			return history.push('/recipes');
		}

		showAlert('Please enter ingredients');
	};

	useEffect(
		() => {
			console.log(loading);

			return () => {
				hideAlert();
			};
		},
		[ hideAlert, loading ]
	);

	return (
		<Fragment>
			<div className="landing" />
			<div className="main-page">
				{!alert ? (
					''
				) : (
					<div className="alert alert-danger" role="alert">
						Ingredients missing
					</div>
				)}
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

const mapStateToProps = ({ alert: { alert }, recipe: { loading } }) => ({
	alert,
	loading
});

export default connect(mapStateToProps, { findIngredients, showAlert, hideAlert, recipeRequest })(Main);
