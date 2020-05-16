import axios from 'axios';

const API_URL = "https://finnhub.io/api/v1";
const API_KEY = "bqlbvinrh5rfdbi8n3gg";

export function fetchSymbols(){
  return async (dispatch) => {
    const symbol_url = `${API_URL}/stock/symbol?`;
    try{
      const result = await axios(symbol_url, {params: {
        exchange: "US",
        token: API_KEY
      }});
      dispatch({type: 'FETCH_SYMBOLS', payload: result.data});
    }catch(error){
      console.error(error);
    }
  }
}

export function fetchCompanyNews(symbol){
  return async (dispatch) => {
    const news_url = `${API_URL}/company-news?`
    var today = new Date();
    var Full_today = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDay()+10);
    var Full_yesterday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDay()+3);
    try{
      const result = await axios(news_url, {params: {
        symbol: symbol,
        from: Full_yesterday,
        to: Full_today,
        token: API_KEY
      }});
      dispatch({type: 'FETCH_COMPANY_NEWS', payload: result.data});
    }catch(error){
      console.error(error);
    }
  };
}

export function fetchGeneralNews(){
  return async (dispatch) => {
    const gnews_url = `${API_URL}/news?`;
    try{
      const result = await axios(gnews_url, {params: {
        category: "general",
        token: API_KEY
      }});
      dispatch({type: 'FETCH_GENERAL_NEWS', payload: result.data});
    }catch(error){
      console.error(error);
    }
  }
}

export function fetchRate(){
  return async (dispatch) => {
    const rate_url = `${API_URL}/forex/rates?`;
    try{
      const result = await axios(rate_url, {params: {
        token: API_KEY
      }});
      dispatch({type: 'FETCH_RATE', payload: result.data.quote});
    }catch(error){
      console.error(error);
    }
  }
}

export function fetchStock(symbol){
  return async (dispatch) => {
    const stock_url = `${API_URL}/stock/profile2?`;
    try{
      const result = await axios(stock_url, {params: {
        symbol: symbol,
        token: API_KEY
      }});
      dispatch({type: 'FETCH_STOCK', payload: result.data});
    }catch(error){
      console.error(error);
    }
  }
}

export function fetchCandle(symbol){
  return async (dispatch) => {
    const candle_url = `${API_URL}/stock/candle?`;
    try{
      const result = await axios(candle_url, {params: {
        symbol: symbol,
        resolution: 60,
        from: 1572651390,
        to: 1572910590,
        token: API_KEY
      }});
      var r_result = [];
      for(var i=0; i<result.data.c.length; i++){
        var d = {};
        d.x = new Date(result.data.t[i]*1000);
        var list = [result.data.o[i], result.data.h[i], result.data.l[i], result.data.c[i]];
        d.y = list;
        r_result.push(d);
      }
      dispatch({type: 'FETCH_CANDLE', payload: r_result});
    }catch(error){
      console.error(error);
    }
  }
}

export function setSymbol(symbol){
  return{
    type: "SET_SYMBOL",
    payload: symbol
  };
}
