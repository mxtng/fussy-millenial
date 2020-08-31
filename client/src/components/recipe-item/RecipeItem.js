import React, { Fragment } from 'react';
import './RecipeItem.scss';

const RecipeItem = ({ name, ingredients, children }) => {
	return (
		<Fragment>
			<div className="recipe-item">
				<img className="card-img-top" src="" alt="" />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<h6>Main ingredients:</h6>
					<ul>{ingredients.split(',').map((item, index) => <li key={index}>{item}</li>)}</ul>
					<div className="btn-blocks">{children}</div>
				</div>
			</div>
		</Fragment>
	);
};

export default RecipeItem;
