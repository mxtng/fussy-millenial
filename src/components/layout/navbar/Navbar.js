import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => (
	<nav className="navbar block navbar-expand-md
   navbar-dark bg-dark">
		<div className="container-lg">
			<input type="checkbox" id="navbar-toggler-checkbox"/>
			<label
				for="navbar-toggler-checkbox"
				className="navbar-toggler-checkbox"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</label>

			<Link className="navbar-brand h1" to="/">
				Fussy Millenial
			</Link>

			<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
				<div className="navbar-nav">
					<Link className="nav-link" to="/recipes">
						Recipes
					</Link>
				</div>
				<div className="navbar-nav ml-auto">
					<Link className="nav-link" to="/favourites">
						Favourites
					</Link>
					<Link className="nav-link" to="/register">
						Register
					</Link>
					<Link className="nav-link" to="/signin">
						Sign In
					</Link>
				</div>
			</div>
		</div>
	</nav>
);
export default Navbar;
