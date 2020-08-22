import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import findIngredients from '../../redux/actions/searchAction';

import './Main.scss';

const Main = ({ findIngredients, history }) => {
	const [ ingredientList, setIngredientList ] = useState('');

	const onChange = (e) => {
		setIngredientList(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (ingredientList) {
			findIngredients(ingredientList);
			return history.push('/recipes');
		}
		return console.log('Please enter ingredients!');
	};

	return (
		<Fragment>
			<div className="landing" />
			<div className="main-page">
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

export default connect(null, { findIngredients })(Main);
