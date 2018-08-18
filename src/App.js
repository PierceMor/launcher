import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Contact from "./pages/contact.js";
import allUsers from "./pages/allUsers.js";
import Header from "./components/header.js";
// import footer from "./components/footer";


import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" Component={Home} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/allUsers" Component={allUsers} />
      </div>
    </Router>
    );
  }
}

export default App;