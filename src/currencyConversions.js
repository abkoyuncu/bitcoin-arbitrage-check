import axios from 'axios';
import constants from './constants.js';

async function checkEuroRateAgainstTry() {
	let lastEuroTryRate = await axios.get(constants.currencyRates.eurToTry);
	return lastEuroTryRate.data.rates.TRY;
}

async function checkTryRateAgainstEuro() {
	let lastTryEuroRate = await axios.get(constants.currencyRates.tryToEur);
	return lastTryEuroRate.data.rates.EUR;
}

export async function convertTryToEuro(turkishLira) {
	let currentRate = await checkEuroRateAgainstTry();
	let converted = turkishLira / currentRate;
	return converted.toFixed(2);
}
