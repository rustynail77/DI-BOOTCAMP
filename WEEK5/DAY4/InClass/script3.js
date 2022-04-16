// # PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then
// append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// # Part II

// Instead of having a fixed category of gif.
// First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// You will then fetch 1 random gif, depending on the word. The word will be the gif category
// Display the word and the gif on the page

// For example:
// you will fetch the random-word-api. This api will return a random word - for example : "happy"
// Using this word as a category, you will fetch one random gif with the category of "happy"
// and display it on the page

// # Part III

// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"

// `https://api.giphy.com/v1/gifs/random?tag=${categoryUser}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`

// .then() method - it takes one argument : the result of the previous promise

async function fetchWord () {
    let response = await fetch('http://random-word-api.herokuapp.com/word?number=1');
    if (response.status !== 200){
        throw new Error ("404 ERROR");
    } else {
        return response.json();
    }
}

async function fetchGif (wordrandom) {
	console.log(wordrandom);
    let response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
	if (response.status !== 200){
			console.log("error 1");
            throw new Error ("404 ERROR");
		} else {
			result = response.json(); //returns a promise
            console.log(result);
            if (result["data"] == []){
                throw new Error ("GIF NOT FOUND");
            } else {
                return result;  
            }
		}
	}		

async function gimmeAGif() {
    try {
        let word = await fetchWord();
        let theGif = await fetchGif(word);
        let gif = theGif["data"]["images"]["original"]["url"];
        let imageGif =  document.createElement("img");
        imageGif.setAttribute("src", gif);
        document.body.appendChild(imageGif);
    } catch {
        let imageGif = document.createElement("img");
		imageGif.setAttribute("src", "https://i.pinimg.com/originals/13/3d/62/133d62f4c7611596b265b81bfb9be08c.gif");
		document.body.appendChild(imageGif);
		console.log("IN THE CATCH", error);
    }

}

gimmeAGif();