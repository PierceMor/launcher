import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home.js";
import allUsers from "./pages/allUsers.js";
import Header from "./components/header.js";
// import footer from "./components/footer";
import Footer from "./components/footer.js";


import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/allUsers" Component={allUsers} />
        </div>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;