BITSTAMP VS KOINIM.COM BITCOIN ASK&BID ARBITRAGE CHECKER
===============


It checks both ways of arbitrage rates from koinim to bitstamp.



Getting Started
---------------

#Clone the repo

#npm install

#hourlyCheck = true npm run dev will send e-mail notification every hour.(configurable in config.json)
Mailjet api key and api secret should be added in constants , email list also should be added in below format :

{Email: '' }

#smsCheck=true phone=xxxx npm run dev will check every 5 minutes the rates and send sms notification if it is above the threshold set in config.json

every single hour email notification will be sent to email distrubition list under constants.

ABK - Ali Baki Koyuncu
