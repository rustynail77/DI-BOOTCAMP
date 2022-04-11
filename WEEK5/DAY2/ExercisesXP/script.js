// Exercise 1: Create a program to retrieve the data from the API URL provided above. 
// Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.

const myGifApi = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

function makeRequest(myAPI) {
	xhr = new XMLHttpRequest();
	xhr.open("GET", myAPI);
    xhr.responseType = "json";
    xhr.send();

	xhr.onload = function () {
	    if (xhr.status === 200) {
			let result = xhr.response;
			console.log(result);
		} else {
			console.log("ERROR FROM THE STATUS")
		}
	}
}
makeRequest(myGifApi);

// Exercise 2: retrieve 10 gifs about the “sun”. The starting position of the results should be 2. Console.log the Javascript Object
const exTwoApi = 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offeset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
// I USED A TIME DELAY BECUASE FOR SOME REASON, SENDING TWO CONSECUTIVE REQUESTS CAUSES AN ERROR
// OR A CUNFUSION BETWEEN THE TWO REQUESTS. I SUPPOSE IT'S DUE TO THE USE OF THE SAME KEY.
setTimeout(()=>makeRequest(exTwoApi),1000);