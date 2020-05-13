import produce from "immer";

const baseState = {
  loading: false,
  error: "",
  stocks: {},
  symbols: {}
}

const reducer = produce((state, action) => {
  switch(action.type){
    case 'FETCH_SYMBOLS':
      action.payload.forEach(symbol => {
        state.symbols[symbol.displaySymbol] = symbol;
      });
      break;
    default:
      break;
  }
}, baseState);

export default reducer;