// Exercise 1: Conversion
// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));
(async function() {
    let result = await fetch("https://swapi.dev/api/starships/9/");
    console.log(await result.json());
})()

// // Exercise 2: Analyze
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();
// Analyze the code provided above what will be the outcome?
// IT WILL FIRST LOG 'CALLING' AND THE CALL THE FUNCTION RESOLVEAFTER2SECONDS WHICH WILL CAUSE
// A 2 SECONDS DELAY (TIMEOUT) AND THE LOG (BACK IN THE ASYNCCALL FUNCTION) 'RESOLVED' WHICH IS
// THE RETURNED RESULT OF THE RESOLVEAFTER2SECONDS FUNCTION.