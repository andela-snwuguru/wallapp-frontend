import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import StatusForm from './components/StatusForm';
import PostList from './components/PostList';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { authentication } from './reducers/AuthReducer';
import {eventAction} from './Utils';
import {USER_LOGGED_IN} from './actions/AuthActions';


function storeWrapper(state = {}, action) {
    return {
      auth: authentication(state.auth, action)
    }
}

const store = createStore(
    storeWrapper,
    applyMiddleware(thunkMiddleware)
);


class App extends Component {
    componentWillMount(){
        if(localStorage.getItem("tw_user")){
            store.dispatch(eventAction(USER_LOGGED_IN, JSON.parse(localStorage.getItem("tw_user"))));
        }
    }

    render() {
        return (
            <Provider store={store}>
              <div className="App">
                <Header />
                <div className="main-container">
                  <StatusForm />
                  <PostList />
                </div>
              </div>
            </Provider>
        );
    }
}

export default App;
