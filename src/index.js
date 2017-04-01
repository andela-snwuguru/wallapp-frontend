import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { authentication } from './reducers/LoginReducer';


function storeWrapper(state = {}, action) {
    return {
      auth: authentication(state.auth, action)
    }
}

const store = createStore(
    storeWrapper,
    applyMiddleware(thunkMiddleware)
);


ReactDOM.render(
  <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
