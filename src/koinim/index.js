import constants from '../constants.js';
import { getBidAskDataWallet } from '../common.js';

export async function getBidTryKoinim() {
	let tryBid = await getBidAskDataWallet(constants.koinim.general, true);
	return tryBid.toFixed(2);
}

export async function getAskTryKoinim() {
	let tryAsk = await getBidAskDataWallet(constants.koinim.general, false);
	return tryAsk.toFixed(2);
}

export async function sellBtcKoinim(amountToSell) {
	let bidPrice = await getBidTryKoinim();
	let currencyAfterSell = amountToSell * bidPrice;
	const fee = constants.koinim.fee;
	return (currencyAfterSell - currencyAfterSell * fee).toFixed(2);
}

export async function buyBtcKoinim() {
	let askPrice = await getAskTryKoinim();
	let currencyAfterFee = askPrice - askPrice * constants.koinim.fee;
	return (currencyAfterFee / askPrice).toFixed(4);
}
