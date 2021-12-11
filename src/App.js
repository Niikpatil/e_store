import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./containers/Header";
import { ProductDetails } from "./containers/ProductDetails";
import { ProductListing } from "./containers/ProductListing";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductDetails} />
          <Route path="/product/:productId" exact component={ProductListing} />
          <Route>404 | Page Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
