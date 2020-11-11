import fs from 'fs';

function DrawCandleChart(booBtcToEth, candleStickData){

    //CanvasJS API is completed through HTML
    //data points are detailed by an array of JSONs where each JSON
    //has the structure
    //{
    //  x: date,
    //  y: [open, high, low, close]
    //}



    //reformat CryptoCompare API response to input into CanvasJS API
    //needs to be a string cuz CanvasJS API request is done via HTML so
    //we are just gonna append the reformattedDataStr into HTML tags
    let reformattedDataStr = '[';
    //for each candlestick data entry, stringify it and append it to 
    //reformattedDataStr as a string
    candleStickData.forEach((entry) => {
        //convert API's unix timestamp into dd/mm/yyyy
        let date = new Date(entry.time * 1000);
        date = date.toDateString;

        //create reformatted entry (x, y coordinates in a JSON)
        let reformattedEntry = {
            x: date,
            y: [entry.open, entry.high, entry.low, entry.close]
        }
        
        //append reformatted entry as a string to reformattedDataStr
        reformattedDataStr = reformattedDataStr + JSON.stringify(reformattedEntry) + ','; 
    });
    //theres an excess comma at the end of reformattedDataStr
    reformattedDataStr = reformattedDataStr.slice(0, -1) + ']';



    //find out what currency the data was converted to
    let originalCurrency = '';
    let finalCurrency = '';
    if(booBtcToEth){
        //final currency is ETH
        finalCurrency = 'ETH';
        originalCurrency = 'BTC';
    }
    else{
        //final currency is BTC
        finalCurrency = 'BTC';
        originalCurrency = 'ETH';
    }



    //setting up CanvasJS API request
    let candleChart = `<!DOCTYPE HTML>
    <html>
    <head>
    <script>
    window.onload = function(){

    var candleChart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: false,
        exportEnabled: true,
        theme: 'light2',
        title: {
            text: 'Candlestick Chart'
        },
        axisX: {
            interval: 1,
            valueFormatString: 'MMM'
        },
        axisY: {
            title: 'Price (from ` + originalCurrency + ' to ' + finalCurrency + `)'
        },
        toolTip: {
            content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
        },
        data: [{
            type: 'candlestick',
            yValueFormatString: "###.00",
            dataPoints: `+ reformattedDataStr +`
        }]
    });

    candleChart.render();
    }
    
    </script>
    </head>

    <body>
    <div id="chartContainer" style="height: 500px; width: 100%;"></div>
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    <script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
    </body>

    </html>`;
    

    
    //writing CanvasJS API request to html file
    fs.writeFile('outputChart.html', candleChart, () => {});

}

export default DrawCandleChart;