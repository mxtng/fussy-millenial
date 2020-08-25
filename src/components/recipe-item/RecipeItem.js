import React, { Fragment } from 'react';

const RecipeItem = () => {
	return (
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
						<button type="button" className="btn btn-secondary" onClick={() => console.log('clicked Fav')}>
							Favourite
						</button>
						<button type="button" className="btn btn-secondary" onClick={() => console.log('clicked Detail')}>
							Details
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default RecipeItem;
