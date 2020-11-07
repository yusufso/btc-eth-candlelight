//CryptoCompare API
//moolimooli@msgsafe.io
//Password321


function GetCandleData(booBtcToEth, howLong, apiKey){
    //booBtcToEth = boolean value on whether ETH price relative to BTC or, BTC price relative to ETH
    //booBtcToEth = true is the price of BTC in ETH
    //booBtcToEth = false is the price of ETH in BTC

    //howLong = integer value on the number of days, from now, you want candlestick data for

    //apiKey = user's API key for CryptoCompare service that provides historical BTC and ETH data



    //fetch necessary data
    //for each day up to howLong, 
    //  fetch open price, close price, highest price, lowest price
    
    const https = require('https');

    if(booBtcToEth){
        //fetch historical price of BTC in ETH
        let apiReq = 'https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=ETH&limit=' + howLong + '&api_key=' + apiKey;

        https.get(apiReq, (resp) => {

            let apiResponse = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', (chunk) => {
                console.log(JSON.parse(data).explanation);
            });

            resp.on('error', (err) => {
                console.log("Error: " + err.message);
            });
        });
    }

    //organise data into JSON



    //return candlestick data
    //return Data;
}

export default GetCandleData;