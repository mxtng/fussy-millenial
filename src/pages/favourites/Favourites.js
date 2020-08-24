import React, { Fragment, useEffect } from 'react';
import './Favourites.scss';
import { connect } from 'react-redux';

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
						<div className="recipe-item">
							<img className="card-img-top" src="" alt="" />
							<div className="card-body">
								<h5 className="card-title">Recipe Title</h5>
								<h6>3 More ingredients needed:</h6>
								<ul>
									<li>ingredient #1</li>
									<li>ingredient #2</li>
									<li>ingredient #3</li>
								</ul>
								<div className="btn-blocks">
									<button type="button" className="btn btn-danger" onClick={removeFavourite}>
										Remove
									</button>
									<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
										Details
									</button>
								</div>
							</div>
						</div>
						<div className="recipe-item">
							<img className="card-img-top" src="" alt="" />
							<div className="card-body">
								<h5 className="card-title">Recipe Title</h5>
								<h6>3 More ingredients needed:</h6>
								<ul>
									<li>ingredient #1</li>
									<li>ingredient #2</li>
									<li>ingredient #3</li>
								</ul>
								<div className="btn-blocks">
									<button type="button" className="btn btn-danger" onClick={removeFavourite}>
										Remove
									</button>
									<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
										Details
									</button>
								</div>
							</div>
						</div>
						<div className="recipe-item">
							<img className="card-img-top" src="" alt="" />
							<div className="card-body">
								<h5 className="card-title">Recipe Title</h5>
								<h6>3 More ingredients needed:</h6>
								<ul>
									<li>ingredient #1</li>
									<li>ingredient #2</li>
									<li>ingredient #3</li>
								</ul>
								<div className="btn-blocks">
									<button type="button" className="btn btn-danger" onClick={removeFavourite}>
										Remove
									</button>
									<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
										Details
									</button>
								</div>
							</div>
						</div>
						<div className="recipe-item">
							<img className="card-img-top" src="" alt="" />
							<div className="card-body">
								<h5 className="card-title">Recipe Title</h5>
								<h6>3 More ingredients needed:</h6>
								<ul>
									<li>ingredient #1</li>
									<li>ingredient #2</li>
									<li>ingredient #3</li>
								</ul>
								<div className="btn-blocks">
									<button type="button" className="btn btn-danger" onClick={removeFavourite}>
										Remove
									</button>
									<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
										Details
									</button>
								</div>
							</div>
						</div>
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
