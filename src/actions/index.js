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

// export function fetchNews(symbol){
//   return async (dispatch) => {
//     const news_url = `${API_URL}/company-news?`
//     // var today = new Date();
//     // var Full_today = today.getFullYear()+'-'+

//     try{
//       const result = await axios(news_url, {params: {
//         symbol: symbol,
//         // from: ,
//         // to: today,
//         token: API_KEY
//       }})
//     }
//   }
// }
