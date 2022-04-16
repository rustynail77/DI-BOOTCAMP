// Exercise 1 : Comparison
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.


function compareToTen(num) {
  let myPromise = new Promise(function (resolve, reject) {
    if (num >= 10) {
          resolve(`${num} is equal or greater than 10. Success!`);
      } else {
          reject(`${num} is smaller than 10. Error!`);
      }
  });
  return myPromise;
} 


//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))



// Exercise 2 : Promises
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

let myOtherPromise = new Promise(function (resolve, reject) {
  setTimeout(() =>
        resolve('Success!'), 4000);
});

myOtherPromise
  .then(result=>console.log(result))
  .catch(error=>console.log('Ooops something went wrong'))