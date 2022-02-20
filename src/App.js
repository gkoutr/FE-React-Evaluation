import React, { useState } from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Interests from "./components/Interests/Interests";
import Skills from "./components/Skills/Skills";
import Interest from "./components/Interests/Interest";
import Skill from "./components/Skills/Skill";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const onLoginHandler = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={onLoginHandler} />;
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/interests">
            <Interests />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/interest/:id" component={Interest} />
          <Route path="/skill/:id" component={Skill} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
