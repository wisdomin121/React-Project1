import React, { useEffect }  from 'react';
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import ListPage from "./pages/ListPage";
import AboutPage from "./pages/AboutPage";
import StockPage from "./pages/StockPage";
import ScrollToTop from './components/ScrollToTop';
import { fetchSymbols, fetchRate, fetchStock, fetchCompanyNews, fetchCandle, fetchGeneralNews } from "./actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRate());
    dispatch(fetchSymbols());
    dispatch(fetchStock("AAPL"));
    dispatch(fetchGeneralNews());
    dispatch(fetchCompanyNews("AAPL"));
    dispatch(fetchCandle("AAPL"));
  });


  return (
    <Router>
      <div className="App">
          <ScrollToTop>
            <Switch>
              <Route path="/list">
                <ListPage />
              </Route>
              <Route path="/stocks/:symbol">
                <StockPage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
