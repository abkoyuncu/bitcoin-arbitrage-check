import http from 'http';
import express from 'express';
import morgan from 'morgan';
import config from './config.js';
import { bitstampToKoinim, koinimToBitstamp, notificationServices } from './common.js';

let app = express();
app.server = http.createServer(app);
// logger
app.use(morgan('dev'));

if (process.env.hourlyCheck) {
	setInterval(runArbitrage, config.emailCheckInterval);
    updateHtml('Running Hourly/SMS Check...');
}

if (process.env.smsCheck) {
	setInterval(runArbitrage, config.smsCheckInterval);
    updateHtml('Running Hourly/SMS Check...');
}

async function runArbitrage() {
	let bitstampToKoinimData = await bitstampToKoinim();
	let koinimToBitstampData = await koinimToBitstamp();
	await notificationServices(bitstampToKoinimData, koinimToBitstampData);
    
    var d = new Date();
    updateHtml(`Last check :${d} 
Data: ${bitstampToKoinimData} ${koinimToBitstampData}`);
}

async function updateHtml(content) {
	http
		.createServer(function(req, res) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(content);
			res.end(); 
		})
		.listen(process.env.PORT);
}

// bid : satis
// ask : alis

export default app;
