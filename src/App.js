import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 | Page Not Found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
