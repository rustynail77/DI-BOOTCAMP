function addDays(days) {
    let result = new Date(d1);
    result.setDate(result.getDate() + days);
    return result;
  }

function stringifyDate(theDate) {
    let month = theDate.getMonth() + 1;
    return `${theDate.getFullYear().toString()}-${month.toString().padStart(2,'0')}-${theDate.getDate().toString().padStart(2,'0')}`;
}

async function getFare(departureAirport = 'TLV', arrivalAirport = 'BUD', maxPrice = 980, tripLength = 7) {
    
    let results = [];

    for (i = 0; i < dateDiff-tripLength; i++) {
        
        let outboundDateFrom = stringifyDate(addDays(i));
        let outboundDateTo = stringifyDate(addDays(i+1));
        let inboundDateFrom = stringifyDate(addDays(i+tripLength));
        let inboundDateTo = stringifyDate(addDays(i+tripLength+1));
    
        let airportsQ = `arrivalAirportIataCode=${arrivalAirport}&departureAirportIataCode=${departureAirport}`;
        let outboundDates = `outboundDepartureDateFrom=${outboundDateFrom}&outboundDepartureDateTo=${outboundDateTo}`;
        let inboundDates = `inboundDepartureDateFrom=${inboundDateFrom}&inboundDepartureDateTo=${inboundDateTo}`;
        let price = `priceValueTo=${maxPrice}`;

        let query = `${airportsQ}&${inboundDates}&language=en&limit=20&offset=3&${outboundDates}&${price}`;
        
        let result = await fetch (genAPI+query);
        let finalResult = await result.json();
        console.log(finalResult.total);
    
        if (finalResult.total > 0) {
            results.push(finalResult);
        }
    }
    
    for (result of results) {
        console.log(result);
        let inboundFlight = result.fares[0]["inbound"];
        let outboundFlight = result.fares[0]["outbound"];
        let totalPrice = result.fares[0]["summary"]["price"]["value"];
        console.log(`Total Price: ${totalPrice}`);
        console.log(`From: ${new Date(outboundFlight["departureDate"])} | Price: ${outboundFlight["price"]["value"]}EUR`);
        console.log(`To: ${new Date(inboundFlight["departureDate"])} | Price: ${inboundFlight["price"]["value"]}EUR`);
        
    }
}

const genAPI = 'https://services-api.ryanair.com/farfnd/3/roundTripFares?'
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const fromDate = '2022-05-20';
const toDate = '2022-06-20';

const d1 = new Date(fromDate);
const d2 = new Date(toDate);
const dateDiff = Math.floor((d2 - d1) / _MS_PER_DAY);

getFare('TLV','BUD',80,7);
