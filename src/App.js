import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/reactPortfolio" exact>
          <Landing></Landing>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
