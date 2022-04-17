const myAPI = 'https://swapi.dev/api/';

async function fetchData (query) {

    let currAPI = query;
    let fetchedData = await fetch(currAPI);
    if (fetchedData.status !== 200) {
        throw new Error ("404 Error");
    } else {
        let data = await fetchedData.json();
        return data;
    }
}

function convertMyKey(text) {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    return newText.replace('_', ' ');
}

async function displayChar () {
    
    try {
        let charData = await fetchData(myAPI+'people/' + Math.floor(Math.random() * 100)+'/');
    
        let fetchHomeWorld = await fetchData(charData["homeworld"]);
        let homeWorld = fetchHomeWorld["name"];
        
        document.querySelector('#charName').innerHTML = '';
        document.querySelector('#textContent').innerHTML = '';
    
        document.querySelector('#charName').appendChild(document.createTextNode(charData["name"]));
    
        let myKeys = ['height','gender','birth_year','homeworld']; 
        for (key of myKeys) {
            let theText = (key=='homeworld') ? `Home world: ${homeWorld}` : `${convertMyKey(key)}: ${charData[key]}`;
            let theElement = document.createElement('div');
            theElement.innerText = theText;
            document.querySelector('#textContent').appendChild(theElement);
        }
    } catch {
        document.querySelector('#charName').innerHTML = 'Sorry Mr. Skywalker,';
        document.querySelector('#textContent').innerHTML = 'No one was available. Please try again.';
    }
   

}

async function main () {
    
    document.querySelector('#myButt').addEventListener('click',()=>{
        document.querySelector('#charName').innerText = "Loading...";
        document.querySelector('#textContent').innerHTML = '<i class="fa-solid fa-spinner fa-spin-pulse"></i>';
        displayChar();
    })
    
}

main();