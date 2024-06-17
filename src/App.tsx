import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import Reports from "./components/Reports";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/customers" component={Customers} />
          <Route path="/reports" component={Reports} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
