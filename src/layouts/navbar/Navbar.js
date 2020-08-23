import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<nav className="navbar navbar-expand-md
   navbar-light bg-light">
		<div className="container-lg">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

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
