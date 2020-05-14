import React from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import { useParams } from "react-router-dom";
import { fetchStock } from "../actions/index";
import { useDispatch ,useSelector } from "react-redux";
import StockDetail from '../components/StockDetail';



const StockPage = () => {
  const dispatch = useDispatch();
  const { symbol } = useParams();
  dispatch(fetchStock(symbol));
  const stock = useSelector(state => state.stock);

  return (
    <>
      <TopBar />
        <StockDetail key={stock.ticker} stock={stock}/>
      <BottomNav />
    </>
  );
};

export default StockPage;