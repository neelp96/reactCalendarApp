import React, { Fragment } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "../src/container/LoginPage";
import RegisterPage from "../src/container/RegisterPage";
import { connect } from "react-redux";
import Calender from "../src/component/Calender";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={RegisterPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/calender" component={Calender} />
        </Switch>
      </Router>
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({});

// export default App;
export default connect(null, mapDispatchToProps)(App);
