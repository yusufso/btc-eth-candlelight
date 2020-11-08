//CryptoCompare API
//moolimooli@msgsafe.io
//Password321

import https from 'https';


function GetCandleData(booBtcToEth, howLong, apiKey, callback){
    //booBtcToEth = boolean value on whether ETH price relative to BTC or, BTC price relative to ETH
    //booBtcToEth = true is the price of BTC in ETH
    //booBtcToEth = false is the price of ETH in BTC

    //howLong = integer value on the number of days, from now, you want candlestick data for

    //apiKey = user's API key for CryptoCompare service that provides historical BTC and ETH data


    
    //if you want price of BTC in ETH
    if(booBtcToEth){
        
        //setup api request for the data
        //howLong has 1 taken off because the API starts from 0
        let apiRequest = 'https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=ETH&limit=' 
        + (howLong-1).toString() + '&api_key=' + apiKey;
        
        //request data to CryptoCompare
        https.get(apiRequest, (resp) => {

            let apiResponse = '';

            //on each chunk received
            resp.on('data', (chunk) => {
                //add chunk to apiResponse
                apiResponse = apiResponse + chunk;
            });


            //once response is finished
            resp.on('end', () => {
                console.log('\n\napiResponse ended\n\n');
                
                //parse and find relevant data from apiResponse
                let parsedApiResponse = JSON.parse(apiResponse);
                let OHLCVdata = parsedApiResponse.Data.Data;
                callback(OHLCVdata);

            });


            //if there is an error in response
            resp.on('error', (err) => {
                console.log("Error: " + err.message);
            });
        });
    }
}

export default GetCandleData;