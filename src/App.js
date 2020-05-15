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

import { useSelector, useDispatch } from "react-redux";
import { fetchSymbols, fetchRate, fetchStock, fetchCompanyNews } from "./actions";

function App() {
  const dispatch = useDispatch();
  const symbol = useSelector(state => state.stock.symbol)

  useEffect(() => {
    dispatch(fetchRate());
    dispatch(fetchSymbols());
    dispatch(fetchCompanyNews(symbol));
  });
  useEffect(() => {
    console.log("제발 한 번만...");
  }, dispatch(fetchStock("AAPL")));

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
