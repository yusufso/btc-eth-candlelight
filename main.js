let apiKey = 'f888cee9980bb06bd1966d5927d6376c91b84c7576ee536bdc91ce2ffef99bc7';
 
import GetCandleData from './GetCandleData.js';
import DrawCandleChart from './DrawCandleData.js';

//GetCandleData(booBtcToEth, howLong, apiKey, callback function)
GetCandleData(true, 5, apiKey, (data) => {
    console.log(data);

    //optional
    //draw candle chart
    DrawCandleChart(data);
});

