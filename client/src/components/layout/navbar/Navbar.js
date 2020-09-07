import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../redux/actions/auth";

import "./Navbar.scss";

const Navbar = ({ authenticated, logoutUser }) => {
  const [checked, setChecked] = useState(false);

  const logoutClicked = () => {
    setChecked(false);
    logoutUser();
  };

  return (
    <nav
      className="navbar block navbar-expand-md
   navbar-dark bg-dark"
    >
      <div className="container-lg">
        <input
          type="checkbox"
          id="navbar-toggler-checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label
          htmlFor="navbar-toggler-checkbox"
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

        <Link
          className="navbar-brand h1"
          to="/"
          onClick={() => setChecked(false)}
        >
          Fussy Millenial
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-nav">
            <Link
              className="nav-link"
              to="/recipes"
              onClick={() => setChecked(false)}
            >
              Recipes
            </Link>
          </div>
          <div className="navbar-nav ml-auto">
            <Link
              className="nav-link"
              to="/favourites"
              onClick={() => setChecked(false)}
            >
              Favourites
            </Link>
            {!authenticated ? (
              <Fragment>
                <Link
                  className="nav-link"
                  to="/register"
                  onClick={() => setChecked(false)}
                >
                  Register
                </Link>
                <Link
                  className="nav-link"
                  to="/signin"
                  onClick={() => setChecked(false)}
                >
                  Sign In
                </Link>
              </Fragment>
            ) : (
              <button
                type="button"
                className="nav-link logout-btn"
                onClick={logoutClicked}
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth: { authenticated } }) => ({
  authenticated,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
