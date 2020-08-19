import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav
    class="navbar navbar-expand-md
   navbar-light bg-light"
  >
    <div className="container-lg">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <Link class="navbar-brand h1" to="/">
        Fussy Millenial
      </Link>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <div class="navbar-nav">
          <Link class="nav-link" to="/recipes">
            Recipes
          </Link>
        </div>
        <div class="navbar-nav ml-auto">
          <Link class="nav-link" to="/favourites">
            Favourites
          </Link>
          <Link class="nav-link" to="/register">
            Register
          </Link>
          <Link class="nav-link" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  </nav>
);
export default Navbar;
