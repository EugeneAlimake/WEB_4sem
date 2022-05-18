import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import Catalog from "./components/Catalog";
import SignUpForm from "./components/signInUp/SignUpForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpIn from "./components/SignUpIn";
import SignInForm from "./components/signInUp/SignInForm";
import FirstPage from "./components/orderForm/FirstPage";
import SecondPage from "./components/orderForm/SecondPage";
import ThirdPage from "./components/orderForm/ThirdPage";

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Catalog} />
          <Route path="/signUp" component={SignUpForm} />
          <Route path="/signIn" component={SignInForm} />
          <Route path="/sign" component={SignUpIn} />
          <Route path="/cart" component={FirstPage} />
          <Route path="/secondPage" component={SecondPage} />
          <Route path="/thirdPage" component={ThirdPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
