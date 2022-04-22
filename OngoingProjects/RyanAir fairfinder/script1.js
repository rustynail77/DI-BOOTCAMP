// get a date and a number of days to add to it and return future date
function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

//Convert date to a string (format: yyyy-mm-dd)
function stringifyDate(theDate) {
    let month = theDate.getMonth() + 1;
    return `${theDate.getFullYear().toString()}-${month.toString().padStart(2,'0')}-${theDate.getDate().toString().padStart(2,'0')}`;
}

// get fares from RyanAir API
async function getFare(departureAirport, arrivalAirport, maxPrice, tripLength, d1, dateDiff) {
    let results = [];

    for (i = 0; i <= dateDiff-tripLength; i++) {
        document.querySelectorAll('.loading')[0].classList.remove('dontShow');

        let outboundDateFrom = stringifyDate(addDays(d1, i));
        let outboundDateTo = stringifyDate(addDays(d1, i+1));
        let inboundDateFrom = stringifyDate(addDays(d1, i+tripLength));
        let inboundDateTo = stringifyDate(addDays(d1, i+tripLength+1));
    
        let airportsQ = `arrivalAirportIataCode=${arrivalAirport}&departureAirportIataCode=${departureAirport}`;
        let outboundDates = `outboundDepartureDateFrom=${outboundDateFrom}&outboundDepartureDateTo=${outboundDateTo}`;
        let inboundDates = `inboundDepartureDateFrom=${inboundDateFrom}&inboundDepartureDateTo=${inboundDateTo}`;
        let price = `priceValueTo=${maxPrice}`;

        let query = `${airportsQ}&${inboundDates}&language=en&limit=20&offset=3&${outboundDates}&${price}`;
        console.log(query);
        let result = await fetch (genAPI+query);
        let finalResult = await result.json();
        console.log(finalResult.total);
        document.querySelectorAll('.loading')[0].classList.add('dontShow');

        if (finalResult.total > 0) {
            results.push(finalResult);
        }
    }
return results;   
}

// convert conventional date to israeli formData
function stringifyFlight (flight) {
    let date = new Date(flight['departureDate']);
    let day = date.getDate().toString().padStart(2,'0');
    let month = date.getMonth()+1;
    month = month.toString().padStart(2,'0');
    let year = date.getFullYear();
    let hour = date.getHours().toString().padStart(2,'0');
    let minute = date.getMinutes().toString().padStart(2,'0');
    let fromAirport = flight['departureAirport']['iataCode'];
    let toAirport = flight['arrivalAirport']['iataCode'];

    return `${fromAirport} => ${toAirport} ${day}/${month}/${year} ${hour}:${minute}`;
}


// Display card of fetch results on page
function createCard (result) {
    
    let card = document.createElement("div");
    card.className = "card";

    let priceTag = document.createElement("div");
    priceTag.className = "priceTag";
    priceTag.innerText = `Rate: ${result.fares[0]["summary"]["price"]["value"]}€`;

    let outbound = document.createElement("div");
    outbound.innerText = stringifyFlight(result.fares[0]["outbound"]);
    
    let inbound = document.createElement("div");
    inbound.innerText = stringifyFlight(result.fares[0]["inbound"]);

    card.appendChild(priceTag);
    card.appendChild(outbound);
    card.appendChild(inbound);

    return card;
}

// sort array of results by price and create cards display on screen
async function displayResults(results) {
    
    results.sort(function(a, b){
        return a.fares[0]["summary"]["price"]["value"] - b.fares[0]["summary"]["price"]["value"]
    });

    for (result of results) {
        console.log(result);
        
        let inboundFlight = result.fares[0]["inbound"];
        let outboundFlight = result.fares[0]["outbound"];
        let totalPrice = result.fares[0]["summary"]["price"]["value"];
        
        console.log(`Total Price: ${totalPrice}`);
        console.log(`From: ${new Date(outboundFlight["departureDate"])} | Price: ${outboundFlight["price"]["value"]}EUR`);
        console.log(`To: ${new Date(inboundFlight["departureDate"])} | Price: ${inboundFlight["price"]["value"]}EUR`);

        document.querySelector('#info').appendChild(createCard(result));
    }
}

// main function after "fetch info" was clicked: get data from form, converts it,
// gets fares from getFare func and send info to displayResults for page display
async function mainClick (event) {
    event.preventDefault();
    
    let myForm = document.getElementById('myForm');
    let formData = new FormData(myForm);
    
    let data = [];
    for (i of formData.values()) data.push(i);
    let d1 = (data[2]=='') ? new Date() : new Date(data[2]);
    let d2 = (data[3]=='') ? addDays(new Date(),30) : new Date(data[3]);
    let d3 = (data[4]=='') ? defaultFare : Number(data[4]);
    let d4 = (data[5]=='') ? defaultTripLength : Number(data[5]);
    console.log(data[0],data[1],d1,d2,d3,d4);
    const dateDiff = Math.floor((d2 - d1) / _MS_PER_DAY);
    if (dateDiff < Number(data[5])) {
        alert("Trip too long for dates range!")
    } else if (dateDiff > 0) {
        let myResults = await getFare(data[0], data[1], d3, d4, d1, dateDiff) 
        displayResults(myResults);
    } else {
        alert('Error. Dates miscalculation!');
    }

}

const defaultFare = 200;
const defaultTripLength = 5;
const genAPI = 'https://services-api.ryanair.com/farfnd/3/roundTripFares?';
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

document.getElementById('myButt').addEventListener('click', (e)=>mainClick(e));
