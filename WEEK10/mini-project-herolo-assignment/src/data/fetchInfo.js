// import autoComp from '../data/autoComplete.json';
// import currCons from '../data/currCons.json';
// import fiveDays from '../data/fiveDaysForecast.json';

const autoCompleteApi = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?';
const fiveDaysForecastApi = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
const currentConditionsApi = 'http://dataservice.accuweather.com/currentconditions/v1/';

const myAPIKey ='nQTuksUag3Nu1GJEvezM4c8N4L7fV7cD';
// const myAPIKey ='1JqqEZNWCnGJBmfFW0zudh0aHUivCdSJ';
// const myAPIKey ='HPQRA6OBlHCaCMLFKQiFVYFNeIkdftoI';

export const fetchCurrentConditions = (locationApi) => {
    // console.log(`${currentConditionsApi}${locationApi}?apikey=${myAPIKey}&language=en-us&details=true`);
    return fetch(`${currentConditionsApi}${locationApi}?apikey=${myAPIKey}&language=en-us&details=true`)
}

export const fetchAutoCompleteApi = (srchTxt = 'bud') => {
    return fetch(`${autoCompleteApi}apikey=${myAPIKey}&q=${srchTxt}&language=en-us`)
}

export const fetchFiveDaysForecast = (metric=true, locationKey="187423") => {
    return fetch(`${fiveDaysForecastApi}${locationKey}?apikey=${myAPIKey}&language=en-us&details=true&metric=${metric}`)
}