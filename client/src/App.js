import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import { getToken } from './components/utils/axiosWithAuth';

function App() {
  const loggedIn = getToken()
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {!loggedIn && <Link to='/bubble-page'>Bubble Page</Link>}
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Switch>
          <PrivateRoute exact path='/bubble-page' component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
