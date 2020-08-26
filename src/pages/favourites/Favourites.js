import React from 'react';
import './Favourites.scss';
import { connect } from 'react-redux';

import RecipeItem from '../../components/recipe-item/RecipeItem';

import { removeFavourite } from '../../redux/actions/recipe';

const Favourites = ({ favourites, removeFavourite }) => {
	const clickRemove = (id) => {
		removeFavourite(id);
	};

	return (
		<div className="favourite-page">
			<div className="recipe-search">
				<h2 className="title">Favourite Recipes</h2>
			</div>
			<div className="recipe-list container-xl">
				{favourites.length > 0 ? (
					favourites.map((item, index) => (
						<RecipeItem key={index} {...item}>
							<button type="button" className="btn btn-secondary" onClick={() => clickRemove(index)}>
								Remove
							</button>
							<button
								type="button"
								name="favourite"
								className="btn btn-secondary"
								onClick={() => console.log('clicked Detail')}
							>
								Details
							</button>
						</RecipeItem>
					))
				) : (
					<p>No Favourite Recipes Found</p>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = ({ recipe: { favourites } }) => ({
	favourites
});

export default connect(mapStateToProps, { removeFavourite })(Favourites);
