import React, { Component } from 'react';
import Movies from './components/Movies/Movies';
import './style.styl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movies />
      </div>
    );
  }
}

export default App;
