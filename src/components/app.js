import React, { Component } from 'react';

import TopBar from "./topbar";
import './styles/app.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <TopBar />
      </div>
    );
  }
}

export default App;
