 export default {
   bitstamp: {
     btceur: 'https://www.bitstamp.net/api/v2/ticker/btceur',
       fee: 400,
   },
   koinim: {
     general: 'https://koinim.com/ticker',
      fee: 0.004
       },
   currencyRates: {
     eurToTry : 'https://api.fixer.io/latest?base=EUR',
     tryToEur: 'https://api.fixer.io/latest?base=TRY'
   },
     mailJet: {
         apiKey: 'dfe2f8c489be8a12b30db36dbe9ad02d',
         apiSecret: '75a8cffcc816bc291ee50852768c9f35',
     },
     nexmo: {
           apiKey: 'eb12bd2c',
            apiSecret: '43f86c8c685d01da'
     },
     emailRecipientList: [
         {
             'Email' : 'koyuncu.alibaki@gmail.com'
         },
        {
             'Email': 'td2018krakow@gmail.com'
         }
     ],
     
};

