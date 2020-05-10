import produce from "immer";

const baseState = {
  loading: false,
  error: "",
	stores: [
		{
			description: 'Dong Wha Pharm Co. Ltd.',
			displaySymbol: '000020.KQ',
			symbol: '000020.KQ',
		},
		{
			description: 'KR Motors Co. Ltd.',
			displaySymbol: '000040.KQ',
			symbol: '000040.KQ',
		},
		{
			description: 'Kyung Bang Ltd.',
			displaySymbol: '000050.KQ',
			symbol: '000050.KQ',
		},
		{
			description: 'Meritz Fire & Marine Insurance Co. Ltd.',
			displaySymbol: '000060.KQ',
			symbol: '000060.KQ',
		},
		{
			description: 'Samyang Holdings Corp. Pfd. Series 1',
			displaySymbol: '000075.KQ',
			symbol: '000075.KQ',
		},
		{
			description: 'HiteJinro Co. Ltd.',
			displaySymbol: '000080.KQ',
			symbol: '000080.KQ',
		},
		{
			description: 'HiteJinro Co. Ltd. Pfd. Series 2',
			displaySymbol: '000087.KQ',
			symbol: '000087.KQ',
		},
		{
			description: 'Yuhan Corp.',
			displaySymbol: '000100.KQ',
			symbol: '000100.KQ',
		},
		{
			description: 'Yuhan Corp. Pfd. Series 1',
			displaySymbol: '000105.KQ',
			symbol: '000105.KQ',
		},
		{
			description: 'CJ Korea Express Corp.',
			displaySymbol: '000120.KQ',
			symbol: '000120.KQ',
		},
		{
			description: 'Hitejinro Holdings Co. Ltd.',
			displaySymbol: '000140.KQ',
			symbol: '000140.KQ',
		},
		{
			description: 'Hitejinro Holdings Co. Ltd. Pfd. Series 1',
			displaySymbol: '000145.KQ',
			symbol: '000145.KQ',
		},
		{
			description: 'Doosan Corp.',
			displaySymbol: '000150.KQ',
			symbol: '000150.KQ',
		},
		{
			description: 'Sungchang Enterprise Holdings Ltd.',
			displaySymbol: '000180.KQ',
			symbol: '000180.KQ',
		},
		{
			description: 'Daelim Industrial Co. Ltd.',
			displaySymbol: '000210.KQ',
			symbol: '000210.KQ',
		},
		{
			description: 'Daelim Industrial Co. Ltd. Pfd. Series 1',
			displaySymbol: '000215.KQ',
			symbol: '000215.KQ',
		}
  ]
}

const reducer = produce((state, action) => {

}, baseState);

export default reducer;