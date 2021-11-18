import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import App from './App';
// store
import store from './store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

