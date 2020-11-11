# btc-eth-candlelight
Generate candlestick charts for BTC to ETH and ETH to BTC with Node.js. The CryptoCompare API is used to fetch historical data. The user will need to obtain their own API key to use this repo. The CanvasJS API is used to build the candlestick chart.

main.js shows you how to use the library. All files are well commented. Download GetCandleData.js and DrawCandleChart.js to your project, import them and use as necessary.

Long story short:

//obtains relevant data
GetCandleData(BTC to ETH or vice versa?, how many days?, CryptoCompare API key, (data) => {
   //plot retrieved data on a candle chart
   DrawCandleChart(BTC to ETH or vice versa?, data);
  //you don't have to DrawCandleChart, and if you do use it you don't have to use it with the callback function demonstrated here
  //as long as you can pass in those two parameters you're good
});
