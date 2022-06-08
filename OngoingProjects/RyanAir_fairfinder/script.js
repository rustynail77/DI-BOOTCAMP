// import airports from './iata.json' assert { type: "json" };
const airports = require('./newAirports.json');
const fs = require('fs');

let airports = [];
let i=0;
for (const property in airports) {
    if (airports[property].iata!=='') {
        newAirports.push(airports[property]);        
        i++;
    }
}
console.log(newAirports);

const jsonContent = JSON.stringify(newAirports);

// fs.writeFile("./newAirports.json", jsonContent, 'utf8', function (err) {
//     if (err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 
// const myAirports = JSON.parse(airports);


// API for routes => https://services-api.ryanair.com/locate/3/routes

