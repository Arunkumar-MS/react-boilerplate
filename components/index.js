import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import ProductList from './product-list';

let store = createStore(reducers, 
  applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ProductList} />
      <Route path="/cart" component={ProductList} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
