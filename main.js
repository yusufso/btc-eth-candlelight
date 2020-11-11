let apiKey = 'f888cee9980bb06bd1966d5927d6376c91b84c7576ee536bdc91ce2ffef99bc7';
 
import GetCandleData from './GetCandleData.js';
import DrawCandleChart from './DrawCandleChart.js';

//change these variables if youre playing around with this

let booBtcToEth = true;
let howLong = 20;

//GetCandleData(booBtcToEth, howLong, apiKey, callback function)
GetCandleData(booBtcToEth, howLong, apiKey, (data) => {

    //optional
    //draw candle chart
    DrawCandleChart(true, data);
});

