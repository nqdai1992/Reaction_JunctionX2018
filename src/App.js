import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppShell from "./layouts/AppShell";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppShell />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
