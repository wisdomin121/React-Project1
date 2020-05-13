import axios from 'axios';

const API_URL = "https://finnhub.io/api/v1";
const API_KEY = "bqlbvinrh5rfdbi8n3gg";

export function fetchSymbols(description, displaySymbol, symbol){
  return async (dispatch) => {
    const symbol_url = `${API_URL}/stock/symbol?`;
    try{
      const result = await axios(symbol_url, {params: {
        exchange: "US",
        token: API_KEY,
        description, displaySymbol, symbol
      }});
      dispatch({type: 'FETCH_SYMBOLS', payload: result.data});
    }catch(error){
      console.error(error);
    }
  }
}
