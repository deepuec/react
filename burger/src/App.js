import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { BrowserRouter, Switch } from "react-router-dom";
import Route from 'react-router-dom/Route';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
