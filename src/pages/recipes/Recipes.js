import React from 'react';
import './Recipes.scss';

const Recipes = () => {
	const onClickFavourite = () => {
		console.log('Favourite Btn Clicked');
	};
	const onClickDetail = () => {
		console.log('Detail Btn Clicked');
	};

	return (
		<div className="recipe-page">
			<div className="recipe-search">
				<h2 className="title">Recipe search:</h2>
				<input type="search" name="" className="search-input" placeholder="Search ingredients for recipes" />
			</div>

			<div className="recipe-list container-xl">
				<div className="recipe-item">
					<img className="card-img-top" src="" alt="Recipe image" />
					<div className="card-body">
						<h5 className="card-title">Recipe Title</h5>
						<h6>3 More ingredients needed:</h6>
						<ul>
							<li>ingredient #1</li>
							<li>ingredient #2</li>
							<li>ingredient #3</li>
						</ul>
						<div className="btn-blocks">
							<button type="button" className="btn btn-secondary" onClick={onClickFavourite}>
								Favourite
							</button>
							<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="recipe-item">
					<img className="card-img-top" src="..." alt="Recipe image" />
					<div className="card-body">
						<h5 className="card-title">Recipe Title</h5>
						<h6>3 More ingredients needed:</h6>
						<ul>
							<li>ingredient #1</li>
							<li>ingredient #2</li>
							<li>ingredient #3</li>
						</ul>
						<div className="btn-blocks">
							<button type="button" className="btn btn-secondary" onClick={onClickFavourite}>
								Favourite
							</button>
							<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="recipe-item">
					<img className="card-img-top" src="..." alt="Recipe image" />
					<div className="card-body">
						<h5 className="card-title">Recipe Title</h5>
						<h6>3 More ingredients needed:</h6>
						<ul>
							<li>ingredient #1</li>
							<li>ingredient #2</li>
							<li>ingredient #3</li>
						</ul>
						<div className="btn-blocks">
							<button type="button" className="btn btn-secondary" onClick={onClickFavourite}>
								Favourite
							</button>
							<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="recipe-item">
					<img className="card-img-top" src="..." alt="Recipe image" />
					<div className="card-body">
						<h5 className="card-title">Recipe Title</h5>
						<h6>3 More ingredients needed:</h6>
						<ul>
							<li>ingredient #1</li>
							<li>ingredient #2</li>
							<li>ingredient #3</li>
						</ul>
						<div className="btn-blocks">
							<button type="button" className="btn btn-secondary" onClick={onClickFavourite}>
								Favourite
							</button>
							<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="recipe-item">
					<img className="card-img-top" src="..." alt="Recipe image" />
					<div className="card-body">
						<h5 className="card-title">Recipe Title</h5>
						<h6>3 More ingredients needed:</h6>
						<ul>
							<li>ingredient #1</li>
							<li>ingredient #2</li>
							<li>ingredient #3</li>
						</ul>
						<div className="btn-blocks">
							<button type="button" className="btn btn-secondary" onClick={onClickFavourite}>
								Favourite
							</button>
							<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="recipe-item">
					<img className="card-img-top" src="..." alt="Recipe image" />
					<div className="card-body">
						<h5 className="card-title">Recipe Title</h5>
						<h6>3 More ingredients needed:</h6>
						<ul>
							<li>ingredient #1</li>
							<li>ingredient #2</li>
							<li>ingredient #3</li>
						</ul>
						<div className="btn-blocks">
							<button type="button" className="btn btn-secondary" onClick={onClickFavourite}>
								Favourite
							</button>
							<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="recipe-item">
					<img className="card-img-top" src="..." alt="Recipe image" />
					<div className="card-body">
						<h5 className="card-title">Recipe Title</h5>
						<h6>3 More ingredients needed:</h6>
						<ul>
							<li>ingredient #1</li>
							<li>ingredient #2</li>
							<li>ingredient #3</li>
						</ul>
						<div className="btn-blocks">
							<button type="button" className="btn btn-secondary" onClick={onClickFavourite}>
								Favourite
							</button>
							<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="recipe-item">
					<img className="card-img-top" src="..." alt="Recipe image" />
					<div className="card-body">
						<h5 className="card-title">Recipe Title</h5>
						<h6>3 More ingredients needed:</h6>
						<ul>
							<li>ingredient #1</li>
							<li>ingredient #2</li>
							<li>ingredient #3</li>
						</ul>
						<div className="btn-blocks">
							<button type="button" className="btn btn-secondary" onClick={onClickFavourite}>
								Favourite
							</button>
							<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="recipe-item">
					<img className="card-img-top" src="..." alt="Recipe image" />
					<div className="card-body">
						<h5 className="card-title">Recipe Title</h5>
						<h6>3 More ingredients needed:</h6>
						<ul>
							<li>ingredient #1</li>
							<li>ingredient #2</li>
							<li>ingredient #3</li>
						</ul>
						<div className="btn-blocks">
							<button type="button" className="btn btn-secondary" onClick={onClickFavourite}>
								Favourite
							</button>
							<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="recipe-item">
					<img className="card-img-top" src="..." alt="Recipe image" />
					<div className="card-body">
						<h5 className="card-title">Recipe Title</h5>
						<h6>3 More ingredients needed:</h6>
						<ul>
							<li>ingredient #1</li>
							<li>ingredient #2</li>
							<li>ingredient #3</li>
						</ul>
						<div className="btn-blocks">
							<button type="button" className="btn btn-secondary" onClick={onClickFavourite}>
								Favourite
							</button>
							<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="recipe-item">
					<img className="card-img-top" src="..." alt="Recipe image" />
					<div className="card-body">
						<h5 className="card-title">Recipe Title</h5>
						<h6>3 More ingredients needed:</h6>
						<ul>
							<li>ingredient #1</li>
							<li>ingredient #2</li>
							<li>ingredient #3</li>
						</ul>
						<div className="btn-blocks">
							<button type="button" className="btn btn-secondary" onClick={onClickFavourite}>
								Favourite
							</button>
							<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="recipe-item">
					<img className="card-img-top" src="..." alt="Recipe image" />
					<div className="card-body">
						<h5 className="card-title">Recipe Title</h5>
						<h6>3 More ingredients needed:</h6>
						<ul>
							<li>ingredient #1</li>
							<li>ingredient #2</li>
							<li>ingredient #3</li>
						</ul>
						<div className="btn-blocks">
							<button type="button" className="btn btn-secondary" onClick={onClickFavourite}>
								Favourite
							</button>
							<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="recipe-item">
					<img className="card-img-top" src="..." alt="Recipe image" />
					<div className="card-body">
						<h5 className="card-title">Recipe Title</h5>
						<h6>3 More ingredients needed:</h6>
						<ul>
							<li>ingredient #1</li>
							<li>ingredient #2</li>
							<li>ingredient #3</li>
						</ul>
						<div className="btn-blocks">
							<button type="button" className="btn btn-secondary" onClick={onClickFavourite}>
								Favourite
							</button>
							<button type="button" className="btn btn-secondary" onClick={onClickDetail}>
								Details
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipes;
