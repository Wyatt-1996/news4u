import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import Headlines from './components/headlines';

class App extends Component {

  constructor() {
    super()
    this.state = {
      page: "News4U"
    }
  }

  // filtersPage = () => {
  //   this.setState({
  //     page: "Filters"
  //   });
  // }

  render() {
    return (
      <div className="App">

        <Navbar
          page={this.state.page}
        />

        <Headlines
        />

        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
