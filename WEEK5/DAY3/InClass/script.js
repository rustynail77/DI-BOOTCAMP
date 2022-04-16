// fetch! and THROW!

function fetchWord () {
    fetch('http://random-word-api.herokuapp.com/word?number=1')
    .then(response=>{
        return response.json(); // .json method returns a promise
    })
    .then(result=>{
        let [word] = result; // or word = result[0] - IT'S THE SAME
        console.log(word);
        fetchGif(word);
    })
    .catch(error => console.log("IN THE CATCH", error));
}

function fetchGif (wordrandom) {
    let gif = fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then(response => {
        if (response.status!==200){
            throw new Error ("404 ERROR")
        } else {
            return response.json();
        }
    })
    .then(result => {
        if (result["data"]==[]) {
            throw new Error ("GIF NOT FOUND")
        } else {
            let gif = result["data"]["images"]["original"]["url"];
        let imageGif=document.createElement("img");
        imageGif.setAttribute("src", gif);
        document.body.appendChild(imageGif);
        }
        
    })
    .catch(error => {
        console.log("IN THE CATCH", error)
    });
}

fetchWord();
