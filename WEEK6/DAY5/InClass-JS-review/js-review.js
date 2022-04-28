// # Review on Javascript

// #### Basics

// 1. How to access the second element of the array `
let arr = [3, 7, 10];
arr[1];

// 2. For the code below, what does `arrNums.splice(2, 0)` return?
// ANSWER: returns an empty array, since it takes 0 items from the 2nd position in the array

//     ```javascript
//     let arrNums = [1, 2, 3, 4, 5];
//     ```

// 3. What is the result of the following code :

//     ```javascript
//     const oneTwoThree = [1, 2, 3]
//     const sevenEightNine = [7, 8, 9]
    
//     const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
//     console.log(all)
//     ```
// ANSWER: [4,5,6,1,2,3,7,8,9]

// 4. What does the following code print to the console?

//    ```javascript
//    let golf = {
//      type: "sport",
//      clubs: {
//        high_end: "taylor made",
//        low_end: "rusty basement clubs"
//      }
//    }  
//    golf.clubs.high_end = "callaway";
//    console.log(golf.clubs.high_end);
//    ```
// ANSWER: it prints "callaway"

// 5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.

//     ```javascript
    // const x = function(a, b){
    //    return a*b;
    // }
//     ```
// it's a function expression. we invoke it by: x(2,3);

// 6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain

//     ```javascript
    // function x() {
    // 	a = 5;
    // }
//     ```
// ANSWER: I don't know about always, but that's generally true

// #### Functions

// 7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?

//     ```javascript
//     function sayHello() {
//        return "Hello, ";
//     }
//     function greeting(helloMessage, name) {
//       console.log(helloMessage() + name);
//     }
//     greeting(sayHello, "JavaScript!");
//     ```
// Yes, we can pass functions as arguments to other functions. In this case it returns: "Hello, JavaScript!"

// 8. Transform this function into an arrow function

//       ```javascript
//       function sum(num1, num2){
//           return num1 + num2
//       }       
//       sum(40,2)
//       sum(42,0)
    //   console.log("the answer to everything is", sum(42,0))
//       ```
// ANSWER: let sum=(num1,num2)=>num1+num2;

// 9. What does the following code print to the console? Explain the process and concept behind it

//      ```javascript
//      function foo () {
//        function bar() {
//          return "Poppin' bottles";
//        }
//        return bar();
//      }
//      console.log(foo());
//      ```
// ANSWER: function bar in nested within function foo. function foo returns the string from function bar.
//          console.log prints the value returned from function foo.

// #### DOM

// 10. Which of the following events will you add in the `addEventListener()`method? 
//       ☐ click
//       ☐ onclick
// ANSWER: click

// 11. Does the `addEventListener()` method allow you to add many events to the same element?

//     ```javascript
//     x.addEventListener("mouseover", func1);
//     x.addEventListener("click", func2);
//     x.addEventListener("mouseout", func3);`
//     ```
// ANSWER: yes

// 12. DOM exercise

//       1. Part I : Create a button in your HTML page, 
//          when the user will click the the button a paragraph will be added 
//          on the DOM with the content "New Paragraph". Use arrow functions
//       2. Part II : Add to each new paragraph a event listener of mouse over. 
//          When you hoover on a paragraph, it should become red

// ANSWER:
// let myButton = document.createElement('button');
// myButton.innerText = "Button";
// myButton.addEventListener('click', ()=>{
//     let myP = document.createElement('p');
//     myP.innerText = "New Paragraph";
//     myP.style.color = 'black';
//         myP.addEventListener('mouseover', (e)=>{
//             e.target.style.color = 'red';
//         })
//     document.querySelector('#container').appendChild(myP);
// })
// document.querySelector('#container').appendChild(myButton);


// #### Array Methods

// 14. What is the value of `passed` in the following code?

//      ```javascript
    //  let marks = [67, 60, 89, 90, 67, 42];
    //  let passed = marks.every(function(m) {
    //     return m >= 50;
    //  });
    //      ```
// ANSWER: passed = [false] bc if any of the items in the list is below 50, it returns false

// 15. What does the following code log?

//    ```javascript
//    let nums = [10, 50, 88];
   
//    let bignums = nums.filter(function(n) {
//       return n > 10;
//    });
//    console.log(bignums);
//    ```
// ANSWER: [50, 88] bc it returns an array of all items above 10


// 16. Use a javascript array method to square the value of every element in the array. 

//    ```javascript
//    const input = [ 1, 2, 3, 4, 5 ];
//code
// input.map((i,index)=>input[index]=(i*i));
//    console.log(input) 
// [ 1, 4, 9, 16, 25]
//    ```

// 16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 

//      ```javascript
//      const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
     //code
//     let total = 0;
//     secondInput.filter(i=>{return i>0}).forEach(i=>{total+=i});
//      console.log(total) //42
//      ```

// 17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.

//      ```javascript
    //  const input = 'George Raymond Richard Martin';
//      //code 
// let initials='';        
// input.split(' ').forEach(i=>{initials+=i.slice(0,1)});
//      console.log(initials)//'GRRM'
//      ```

// #### Object and Classes

// 18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example
// ANSWER: objects are passed by reference. this means that changing the values in the passed object 
// may change them in the original object as well

// 19. What will be printed in the console

//     ```javascript
//     function Item(name, price) {
//        this.name = name;
//        this.price = price;
//        this.displayInfo = function() {
//        console.log(this.name + " is for $ " + this.price)
//        }
//     } 

//     const cake = new Item("Chocolate Cake", 10);
//     cake.displayInfo();
//     ```
// ANSWER: "Chocolate Cake is for $ 10"

// 20. Refactor this code using Classes
// class Item {
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     displayInfo = function() {
//         console.log(this.name + " is for $" + this.price)
//     } 
// }
// const cake = new Item("Chocolate Cake", 10);
// cake.displayInfo();


// #### Promises

// 21. What will be the output and why ? What will be the state of the promise ?

//     ```javascript
//     Promise.resolve('Success!')
//       .then(data => {
//         return data.toUpperCase()
//       })
//       .then(data => {
//         console.log(data)
//       })
//     ```
// ANSWER:  the promise state will be fulfilled and the output will be "SUCCESS!", as the first part of the promise will return
//          the attribute text in upper case which will then be passed to the second part that console logs it.

// 22. What log will be made by the following code, after 2 seconds?

//     ```javascript
//     const p = new Promise(function(resolve, reject) {
//        setTimeout(function() {
//           resolve("OK");
//        }, 2000);
//     });
    
//     p.then().then(function(data) {
//        console.log(data);
//     });
//     ```
// ANSWER: after 2 seconds the promise will return it's "resolve" value ("OK"), which will then be transferred to
//          the function that console.logs it.

// 23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process

//     ```javascript
    // async function f() {
    //   let result = 'first!';
    //   let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve('done!'), 1000);
    //   });
    
    //   result = await promise;
    
    //   console.log(result);
    // }
    
    // f();
//     ```
// ANSWER: when f function is called, result gets the value 'first!', then a promise is being declared and then result is being
//          reassigned with the promise's result. console.log doesn't occur until the promise is resolved and thus result
//          receives the value of the resolved promise ('done!'), which eventually is what's being console logged.

// 24. Use async await, and fetch to a fact on cats and display it `https://catfact.ninja/fact`. 
//     1. Create 2 functions: one to fetch data from API, the other one to display it on the page using the DOM
//     2. Make sure to use try and catch
// ANSWER:

// async function getInfo(request) {
//     let result = await fetch(request);
//     if (result.status !== 200) {
//         throw new Error ("404 Error");
//     } else {
//         let data = await result.json();
//         return data;
//     } 
// }

// async function displayInfo(info) {
//     try {
//         const myInfo = await getInfo(info); 
//         let fact = myInfo.fact;

//         document.getElementsByTagName('body')[0].innerText = fact;

//     } catch(err){
//         console.log(err);
//     }
    
// }
// let myAPI = 'https://catfact.ninja/fact';
// displayInfo(myAPI);