import axios from 'axios';
import constants from './constants';
import config from './config.js';
import { sendNexmoSms, sendEmail } from './utils';
import { getBidEuroBitStamp, getAskEuroBitStamp, buyBtcBitstamp, sellBtcBitstamp } from './bitstamp/index.js';
import { getAskTryKoinim, getBidTryKoinim, sellBtcKoinim, buyBtcKoinim } from './koinim/index.js';
import { convertTryToEuro } from './currencyConversions.js';

export async function getBidAskDataWallet(url, returnBid) {
	let response = await axios.get(url);
	let returnData = response.data;
	returnBid ? (returnData = response.data.bid) : (returnData = response.data.ask);
	return returnData;
}

export async function bitstampToKoinim() {
	let bitstampEuro = await getAskEuroBitStamp();
	let amountOfBtcToSell = await buyBtcBitstamp();
	let koinimTryAfterSell = await sellBtcKoinim(amountOfBtcToSell);
	let convertedTry = await convertTryToEuro(koinimTryAfterSell);
	let profitRate = await checkArbitrageRate(bitstampEuro, convertedTry);
	const data = {
		bitstampAskEuro: bitstampEuro,
		profit: profitRate
	};
	return data;
}

export async function koinimToBitstamp() {
	let koinimTry = await getAskTryKoinim();
	let amountOfBtcToSell = await buyBtcKoinim();
	let bitstampEuroAfterSell = await sellBtcBitstamp(amountOfBtcToSell);
	let convertedTry = await convertTryToEuro(koinimTry);
	let profitRate = await checkArbitrageRate(convertedTry, bitstampEuroAfterSell);
	const data = {
		koinimAskTry: koinimTry,
		profit: profitRate,
		koinimAskTryEuro: convertedTry
	};
	return data;
}

async function checkArbitrageRate(buyingWallet, sellingWallet) {
	let diff = sellingWallet - buyingWallet;
	let percentage = diff / buyingWallet * 100;
	return percentage.toFixed(2);
}

export async function notificationServices(bitstampToKoinim, koinimToBitstamp) {
	let subject = `ARBITRAGE RATES - %${bitstampToKoinim.profit} , %${koinimToBitstamp.profit}`;
	let messageBody = `Bitstamp 1BTC = ${bitstampToKoinim.bitstampAskEuro} EUR,
Koinim 1BTC = ${koinimToBitstamp.koinimAskTry} TRY = ${koinimToBitstamp.koinimAskTryEuro} EUR,

Bitstamp => Koinim = % ${bitstampToKoinim.profit}
Koinim => Bitstamp = % ${koinimToBitstamp.profit}`;

	if (process.env.hourlyCheck) {
		await sendEmail(messageBody, subject);
	}
	if (koinimToBitstamp.profit > config.thresholdPercentage || bitstampToKoinim.profit > config.thresholdPercentage) {
		if (process.env.smsCheck) {
			await sendNexmoSms(messageBody);
		}
	}
}
