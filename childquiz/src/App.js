import React, { Component } from "react";
import './App.css';
import Home from "./pages/Home"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          {/* <Header /> */}
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>

    );
  }
}
export default App;


