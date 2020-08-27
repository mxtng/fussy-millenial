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
        </div>
        <p className="search-example">e.g. chicken, mushroom, onions...</p>
      </div>
    </Fragment>
  );
};

export default Main;
