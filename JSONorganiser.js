function JSONorganiser(data, callback){
    let parsedData = JSON.parse(data);
    let arrayData = parsedData.Data.Data;

    callback(arrayData);
}

export default JSONorganiser;