/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCheapflights} from './actions/cheapFlightsActions';
import {loadRegions} from './actions/regionActions';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCheapflights());
store.dispatch(loadRegions());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
