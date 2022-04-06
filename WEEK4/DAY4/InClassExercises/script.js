// # Part I
// 1) Create a TV function constructor with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
// 3) Create an object for the LG TV
// 4) Call the inscrease method, and check if the volume changed

function TV(brand, channel = 1, volume = 50) {
    this.brand = brand,
    this.channel = channel,
    this.volume = volume,

    this.incVol = function(step = 1) {
        this.volume += step;
    },

    this.decVol = function(step = 1) {
        this.volume -= step;
    }
}

let LG = new TV("LG");



// ## Exercise2
// Pass this object
// {
// name: 'Hermione Granger', 
//  house: 'Gryfindor', 
//  friend :  {
// 	friendName : 'Harry Potter', 
// 	age : 20
// 	}
// }
// as an argument of the getMoreDetails function.
// Destructure the object in the parameter (ie. you should have 4 parameters : name, house, friendName and age)
// and console.log them
function getMoreDetails({name, house, friend:{friendName,age}}) {
	console.log(name, house, friendName, age)
}

getMoreDetails({name: 'Hermione Granger', house: 'Gryfindor', friend :  {friendName : 'Harry Potter', age : 20}});



// ## Exercise3
// Pass this object
// const elonPerson = {first: 'Elon', last: 'Musk', housesLocation : ["new york", "paris"], twitter: '@elonmusk', company: 'Space X', houses : {amount: 2, value : "5Million"}}
// as an argument of the getElonMuskDetails function.
// Destructure the object in the parameter and console.log
// - his first name, last name, the 2 cities where he owns an appartment, and the value of the houses
function getElonMuskDetails({first, last, housesLocation:[city1, city2], houses:{value}}){
	console.log(first, last, city1, city2, value);
}

getElonMuskDetails({first: 'Elon', last: 'Musk', housesLocation : ["new york", "paris"], twitter: '@elonmusk', company: 'Space X', houses : {amount: 2, value : "5Million"}});