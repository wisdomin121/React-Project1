import React from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import { useParams } from "react-router-dom";


const StockPage = () => {
  const { symbol } = useParams();
  
  {console.log(symbol)}
  return (
    <>
      <TopBar />

      <BottomNav />
    </>
  );
};

export default StockPage;