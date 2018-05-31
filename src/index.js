import React, { Component } from 'react';
import { render } from 'react-dom';
import Timer from './Timer';
import './style.css';

class App extends Component {
  render() {
    return (
      <Timer duration={10000}/>
    );
  }
}

render(<App />, document.getElementById('root'));
