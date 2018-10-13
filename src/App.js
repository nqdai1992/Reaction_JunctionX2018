import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppShell from "./layouts/AppShell";
import history from './history';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <AppShell history={history}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
