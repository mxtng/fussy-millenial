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
        <Alert />
        <Search />
        {/* 
        <form className="search-field">
          <div className="input-group">
            {/* <input
              type="search"
              name="search"
              className="form-control"
              placeholder="Search ingredients"
              onChange={onChange}
            />
            <button className="btn btn-secondary">Search</button> */}

        {/* </div>
        </form>  */}

        <p className="search-example">e.g. chicken, mushroom, onions...</p>
      </div>
    </Fragment>
  );
};

export default Main;
