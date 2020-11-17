import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
