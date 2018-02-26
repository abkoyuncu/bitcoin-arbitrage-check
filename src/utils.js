import constants from './constants';
import request from 'request';
import Nexmo from 'nexmo';
import Mailjet from 'node-mailjet';

export async function sendSms(smsText) {
	request.post(
		'https://textbelt.com/text',
		{
			form: {
				phone: process.env.phone,
				message: smsText,
				key: 'textbelt'
			}
		},
		function(err, httpResponse, body) {
			if (err) {
				console.error('Error:', err);
				return;
			}
			console.log(JSON.parse(body));
		}
	);
}

const nexmo = new Nexmo({
	apiKey: constants.nexmo.apiKey,
	apiSecret: constants.nexmo.apiSecret
});

export async function sendNexmoSms(smsBody) {
	nexmo.message.sendSms('ABK', process.env.phone, smsBody);
}

export async function sendEmail(mailBody, mailSubject) {
	var mail = Mailjet.connect(constants.mailJet.apiKey, constants.mailJet.apiSecret);
	var emailData = {
		FromEmail: yourEmail,
		FromName: 'ARBITRAGE',
		Subject: mailSubject,
		'Text-part': mailBody,
		Recipients: constants.emailRecipientList
	};
	mail.post('send').request(emailData);
}
