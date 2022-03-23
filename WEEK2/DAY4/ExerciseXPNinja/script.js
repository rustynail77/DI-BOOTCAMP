// Exercise 1: Random Number
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.
let randNum = Math.floor(Math.random() * 100);
for (i=0; i<=randNum; i++){
    if (i%2==0) console.log(i);
}

// Exercise 2: Capitalized Letters
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note: Index 0 will be considered even. 
// The argument of the function should be a lowercase string with no spaces.
// For example, capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']
function capMe(myString) {
    let newWords = [];
    newWords[0] = "";
    newWords[1] = "";
    for (i=0;i<myString.length;i++) {
        if (i%2==0) {
            newWords[0] += myString[i].toUpperCase();
            newWords[1] += myString[i];
        } else {
            newWords[0] += myString[i];
            newWords[1] += myString[i].toUpperCase();
        }
    }
    console.log(newWords);
}
capMe("himalaya");

// Exercise 3 : Is Palindrome?
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.
function isPalindrome(word) {
    let checker = true;
    for (i=0; i<word.length/2; i++) {
        if (word[i] == word[word.length-i-1]) {
            continue;
        } else {
            checker = false;
            break;
        }
    }
    return checker;
}
console.log(isPalindrome("kayak"));

// Exercise 4 : Biggest Number
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example: // const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 // const array2 = ['a', 3, 4, 2]; // should return 4 
// const array3 = []; // should return 0
function biggestNum(numArr) {
    let max=Number.NEGATIVE_INFINITY;
    if (numArr.length > 0) {
        for (num of numArr) {
            if (num > max) max = num;
        }
    } else {
        max = 0;
    } 
    return max;
}
console.log(biggestNum(['a', 3, 4, 2]));

// Exercise 5: Unique Elements
// Write a JS function that takes an array and returns a new array with only unique elements.
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
function uniqueElements(array) {
    let unique = [];
    for (let item of array) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
}
console.log(uniqueElements([1,2,3,3,3,3,4,5]));