// 1st Challenge
// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Example

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]
Promise.all([promise1,promise2,promise3])
    .then((fromRes)=>console.log('Array',fromRes))
    .catch((fromRej)=>console.log('Rejected:',fromRej));

// 2nd Challenge
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.
// In the HTML file, create a form with 6 inputs:
// name of the first city, its latitude and its longitude
// name of the second city, its latitude and its longitude.
// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()
async function myPromiseFunc(e) {
    e.preventDefault();
    let c1 = await fetch(`https://sunrise-sunset.org/api?lat=${myForm.elements[1].value}&lng=${myForm.elements[2].value}`);
    let c2 = await fetch(`https://sunrise-sunset.org/api?lat=${myForm.elements[4].value}&lng=${myForm.elements[5].value}`);
    Promise.all([c1,c2])
        .then((fromRes)=>console.log(fromRes))
        .catch((fromRej)=>console.log(fromRej));
}


let myForm = document.forms[0];
myForm.addEventListener('submit',(e)=>myPromiseFunc(e));
// Try with Paris and New York
// Paris: // Latitude: 48.864716 // Longitude: 2.349014
// New York: // Latitude: 40.730610 // Longitude: -73.935242

