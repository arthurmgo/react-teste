import React, { Component } from 'react';
import NavBar from './ui/NavBar'

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar logo="BOPE SYSTEM 2.0"/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
