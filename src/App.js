import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { fakeInterests, fakeSkills } from "./dummy-data";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Interests from "./components/Interests/Interests";
import Skills from "./components/Skills/Skills";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoginHandler = () => {
    setIsLoggedIn(true);
  }

  if (!isLoggedIn) {
    return <Login onLogin={onLoginHandler}/>;
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/interests">
          <Interests />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
