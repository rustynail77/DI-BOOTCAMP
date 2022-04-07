// Create a curried function, that returns the volume of an object
// the volume is calculated like this length * weight * height

// Call the function twice, for products of length 10cm. Weight and Height can differ

// Call the function twice, for products of length 10cm and weight 2 grams,  height can differ


let getVolume = length => height => weight => length * height * weight;

let first = getVolume(10);
console.log(first(9)(8));
console.log(first(2)(20));

let second = getVolume(10)(2);
console.log(second(8));
console.log(second(20));



// // "John" -> return ["J", "o", "h", "n"]
// //     -> return ["J", "O", "H", "N"]
// //     -> "J.0.H.N"

// Create 3 function
// // 1. First, that split the name
// // 2. Then the second one make every letter uppercase 
// // 3. Finally, the last one add . between each letter (join)

function splitter (word) {
    return word.split('');
}

function upperMe (letters) {
    for (l in letters) {letters[l] = letters[l].toUpperCase()}
    return letters;
}

function addDots (letterArr) {
    let newWord = "";
    letterArr.forEach((letter, index) => {
        if (letter=='O'){letter="0"}
        newWord += letter;
        if (index < letterArr.length - 1) {newWord += "."} 
    })
    return newWord;
}
console.log(addDots(upperMe(splitter("John"))));