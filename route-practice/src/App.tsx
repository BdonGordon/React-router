import * as React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Header />
        <Main />
      </div>
    );
  }
}

// Line 20: The header is only displaying the list of links that can be pressed
// Line 21: Main is routing all the pages that are seen below the header's list

export default App;