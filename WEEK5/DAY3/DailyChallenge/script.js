let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

// 1. Create three functions. The two first functions should return a promise.

// 2. The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

function toJs() {
    let toJsPromise = new Promise(function(resolve, reject) {
        let morseJson = JSON.parse(morse);
        if (Object.keys(morseJson).length==0) {
            reject('error! empty object')
        } else {
            resolve(morseJson)
        }
    })
    return toJsPromise;
}

toJs()
    .then(result => toMorse(result))
    .then(result=>joinWords(result))
    .catch(err => console.log(err))

// 3. The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
function toMorse(morseJs) {
    let input = prompt("Please enter word or sentence> ");
    let myPromise = new Promise(function(resolve, reject) {
        let result = [];
        for (letter of input) {
            if (!Object.keys(morseJs).includes(letter)) {
                reject('invalid character entered!')
            } else {
                result.push(morseJs[letter]);
            }
    
        }
        resolve(result)
    })
    return myPromise;
}

// 4. The third function called joinWords(morseTranslation), takes one argument: the morse translation array * this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
function joinWords(morseTranslation) {
    let str = morseTranslation.join('\n');
    document.querySelector('container').innerText = str;
}

// 5. Chain the three functions.