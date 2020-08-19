import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./layouts/navbar/Navbar";

import Main from "./pages/main/Main";
import Recipes from "./pages/recipes/Recipes";
import Favourites from "./pages/favourites/Favourites";
import Register from "./pages/register/Register";
import Signin from "./pages/signin/Signin";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router basename="/fussy-millenial">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
