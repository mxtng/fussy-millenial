import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Main from "./pages/main/Main";
import Recipes from "./pages/recipes/Recipes";
import Favourites from "./pages/favourites/Favourites";
import Register from "./pages/register/Register";
import Signin from "./pages/signin/Signin";
import store from "./redux/store";
import { loadUser } from "./redux/actions/auth";

import "./App.css";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/favourites" component={Favourites} />
            <Route path="/register" component={Register} />
            <Route path="/signin" component={Signin} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
