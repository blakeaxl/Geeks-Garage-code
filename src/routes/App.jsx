import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/Geeks-Garage" component={Home} />
            <Route exact path="/Geeks-Garage/checkout" component={Checkout} />
            <Route
              exact
              path="/Geeks-Garage/checkout/information"
              component={Information}
            />
            <Route
              exact
              path="/Geeks-Garage/checkout/payment"
              component={Payment}
            />
            <Route
              exact
              path="/Geeks-Garage/checkout/success"
              component={Success}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
