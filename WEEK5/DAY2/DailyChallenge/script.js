function addMyGif(gifUrl){
    let myCard = document.createElement('div');
    myCard.className = 'gif';
    let myImage = document.createElement('img');
    myImage.src = gifUrl;
    myImage.style.width = "100px";
    let myButton = document.createElement('button');
    myButton.textContent = "x";
    myButton.addEventListener('click',(e)=>e.target.parentNode.remove());
    myCard.appendChild(myImage);
    myCard.appendChild(myButton);

    document.querySelector('#gifs').appendChild(myCard);
}

function makeRequest(query) {
	let myApi = `https://api.giphy.com/v1/gifs/search?q=${query}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
    xhr = new XMLHttpRequest();
	xhr.open("GET", myApi);
    xhr.responseType = "json";
    xhr.send();
    
    let result;
	xhr.onload = function () {
	    if (xhr.status === 200) {
			result = xhr.response.data;
            let randNum = Math.floor(Math.random() * 50);
            let myGif = result[randNum].images.original.url;
            addMyGif(myGif);
		} else {
			console.log("ERROR FROM THE STATUS")
		}
	}
}

// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

document.getElementsByTagName('button')[0].addEventListener('click', (e)=>{
    e.preventDefault();
    let query = document.forms[0]["myText"].value;
    makeRequest(query);
});

document.getElementById('delAll').addEventListener('click', ()=>{
    let allGifs = document.querySelectorAll('.gif');
    for (card of allGifs) card.remove();
})
