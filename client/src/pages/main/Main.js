import React, { Fragment } from "react";

import Landing from "../../components/layout/landing/Landing";
import Alert from "../../components/alert/Alert";
import Search from "../../components/search/Search";

import "./Main.scss";

const Main = () => {
  return (
    <Fragment>
      <Landing />
      <div className="main-page">
        <h1 className="title">Fussy Millenial</h1>
        <div className="search-container">
          <Alert />
          <Search />
        <small className="search-example">e.g. chicken, mushroom, onions</small>
        </div>
        <span className="tag">
          Powered by{" "}
          <a
            href="https://spoonacular.com/food-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            spoonacular
          </a>
        </span>
      </div>
    </Fragment>
  );
};

export default Main;
