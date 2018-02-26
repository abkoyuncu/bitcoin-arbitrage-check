import constants from '../constants.js';
import { getBidAskDataWallet } from '../common.js';

export async function getBidEuroBitStamp() {
	let euroBid = await getBidAskDataWallet(constants.bitstamp.btceur, true);
	return euroBid;
}

export async function getAskEuroBitStamp() {
	let euroAsk = await getBidAskDataWallet(constants.bitstamp.btceur, false);
	return euroAsk;
}

export async function buyBtcBitstamp() {
	let askPrice = await getAskEuroBitStamp();
	let currencyAfterFee = askPrice - askPrice / constants.bitstamp.fee;
	return (currencyAfterFee / askPrice).toFixed(4);
}

export async function sellBtcBitstamp(amountToSell) {
	let bidPrice = await getBidEuroBitStamp();
	let currencyAfterSell = amountToSell * bidPrice;
	const fee = constants.bitstamp.fee;
	return (currencyAfterSell - currencyAfterSell / fee).toFixed(2);
}
