// Exercise 1 : Location
// Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}
const {name, location: {country, city, coordinates: [lat, lng]}} = person;
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// IT WILL SAY "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)"
// THIS IS A DESTRUCTURED OBJECT THAT WAS DISTRIBUTED TO VARIABLES


// Exercise 2: Display Student Info
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// Destructure the parameter inside the function and return a string as the example seen below:
// displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
// // output : 'Your full name is Elie Schoppik'`
function displayStudentInfo(studentObject) {
    let {first, last} = studentObject;
    console.log(`Your full name is ${first} ${last}`);
}
displayStudentInfo({first: 'Elie', last:'Schoppik'}) ;

// Exercise 3: User & Id
// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
function buildArr (multip = 1) {
    let newUsers = [];
    for (let key in users) {
        newUsers.push([key, users[key]*multip]);
    }
    console.log(newUsers);
}
// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
buildArr(2);

// Exercise 4 : Person Class
// Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}
const member = new Person('John');
console.log(typeof member);
// "object" - which is the type of "member" const


// Exercise 5 : Dog Class
// Using the Dog class below:
class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1 - WON'T WORK. "NAME" IS NOT DEFINED.
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


//   // 2 - SHOULD WORK
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 3 - WON'T WORK. "NAME" NEEDS TO BE IN CONSTRUCTOR AS WELL
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4 - SHOULD WORK. PARENT "SIZE" WILL BE OVERRIDDEN BY CHILD'S "SIZE"
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };


// Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] => False. They point to different addresses
// {} === {} => False. They point to different addresses


// What is, for each object below, the value of the property number ?

// const object1 = { number: 5 }; => 5
// const object2 = object1; => 5
// const object3 = object2; => 5
// const object4 = { number: 5}; => 5 
// object1.number = 4; => 4

// Create a class Animal with the attributes name, type and color
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// Create a class Mamal that extends from the Animal class. It has a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mamal extends Animal {
    constructor(name, type, color) {
        super(name,type,color);
    }
    
    sound (theSound) {
        this.sound = theSound;
        console.log(this.name, this.type, this.color, this.sound);
    } 
}

let cow = new Mamal("cow", "steak", "brown");
cow.sound('moo');

// Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color.
