//----------------------
// ASYNC AWAIT USING FETCH
// ----------------------

// ---------------
// ERROR HANDLING
//-----------------

let btn = document.getElementById("btn");
btn.addEventListener("click", displayAll)

// 2.
async function getUser () { 
	//2.1 waits for the promise returned by the FETCH API to be settled
	// and assign the result of the promise to the variable response
	let response = await fetch('https://jsonplaceholder.typicode.com/users/1')
	//2.2 check the status of the response
	if (response.status >= 400 && response.status < 600){
		//2.3 if there is an error from the server -> throw an error : rejected promise
		throw new Error("Bad response from server");
		//2.4 if there is no error from the server -> resolve the promise
		// the result of the promise will be response.json()
		// which is itself a promise
	} else {
	    return response.json();
	}
}


async function getGifs(user) {
	////2.1 waits for the promise returned by the FETCH API to be settled
	// and assign the result of the promise to the variable responsegif
	let responsegif = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${user.username}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    //2.2 check the status of the response
    if (responsegif.status >= 400 && responsegif.status < 600) {
    	//2.3 if there is an error from the server -> throw an error : rejected promise
      	throw new Error("Bad response from server");
      	//2.4 if there is no error from the server -> resolve the promise
		// the result of the promise will be response.json()
		// which is itself a promise
    } else {
    	return responsegif.json();
    }
}

//when we click on the button, we call this function
async function displayAll(){
	try {
		let user = await getUser(); //waiting for the getUser promise to be settled
		let gif = await getGifs(user); //waiting for getGifs promise to be settled
		console.log(gif["data"]["title"]);
	} catch (err){
		console.log(err.message)
	}
}
