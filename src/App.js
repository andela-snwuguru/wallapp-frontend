import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import StatusForm from './components/StatusForm';
import PostList from './components/PostList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="main-container">
          <StatusForm />
          <PostList />
        </div>
      </div>
    );
  }
}

export default App;
