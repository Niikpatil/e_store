import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import { Main } from "./Layouts/Main";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Main>
            <Route exact path="/" component={ProductListing} />
            <Route path="/product/:productId" component={ProductDetails} />
            {/* <Route>
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
            </Route> */}
          </Main>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
