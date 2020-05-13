import React, { useEffect }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import HomePage from './pages/HomePage';
import ListPage from "./pages/ListPage";
import HelpPage from "./pages/HelpPage";
import StockPage from "./pages/StockPage";

import { useDispatch } from "react-redux";
import { fetchSymbols } from "./actions";



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSymbols("AGILENT TECHNOLOGIES INC", "A", "A"));
  })
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/list">
              <ListPage />
            </Route>
            <Route path="/stocks/:symbol">
              <StockPage />
            </Route>
            <Route path="/help">
              <HelpPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
