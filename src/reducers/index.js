import produce from "immer";

const baseState = {
  loading: false,
  error: "",
  rates: {},
  symbols: {},
  stock: [],
  candle: [],
  companynews: {},
  generalnews: {}
}

const reducer = produce((state, action) => {
  switch(action.type){
    case 'FETCH_SYMBOLS':
      action.payload.forEach(symbol => {
        state.symbols[symbol.displaySymbol] = symbol;
      });
      break;
    case 'FETCH_RATE':
      state.rates = action.payload;
      break;
    case 'FETCH_STOCK':
      state.stock = action.payload; 
      break;
    case 'FETCH_COMPANY_NEWS':
      state.companynews = {};
      action.payload.forEach(cnews => {
        state.companynews[cnews.headline] = cnews;
      });
      break;
    case 'FETCH_GENERAL_NEWS':
      state.generalnews = {};
      action.payload.forEach(gnews => {
        state.generalnews[gnews.headline] = gnews;
      })
      break;
    case 'FETCH_CANDLE':
      state.candle = action.payload;
      break;
    default:
      break;
  }
}, baseState);

export default reducer;