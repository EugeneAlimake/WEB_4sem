import React from "react";
import "./index.css";
import Nav from "./Nav";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={FirstPage} />
        <Route path="/secondPage" component={SecondPage} />
        <Route path="/thirdPage" component={ThirdPage} />
      </Switch>
    </Router>
  );
}

export default App;
