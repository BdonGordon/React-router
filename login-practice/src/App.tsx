import * as React from 'react';
import './App.css';
import Login from './routes/Login/components/Login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Login />
      </div>
    );
  }
}

export default App;
