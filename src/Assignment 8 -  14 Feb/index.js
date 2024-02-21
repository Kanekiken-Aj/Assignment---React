
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import App4 from './App4';

ReactDOM.render(
  <Provider store={store}>
    <App4 />
  </Provider>,
  document.getElementById('root')
);
