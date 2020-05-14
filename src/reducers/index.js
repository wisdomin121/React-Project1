import produce from "immer";

const baseState = {
  loading: false,
  error: "",
  stock: {},
  symbols: {},
  rates: {},
  allnews: {}
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
    default:
      break;
  }
}, baseState);

export default reducer;