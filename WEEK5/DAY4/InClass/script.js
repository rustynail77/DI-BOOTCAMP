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
  
async function toJs (str) {
    if (str.length === 0) {
        throw new Error('this string is empty -- ERROR IN 1st FUNCTION');
    } else {
        let obj = JSON.parse(str);
        return obj;
    }
  }
  
async function toMorse (obj) {
    let str = prompt('enter a word');
    let arrStr = str.split('');
    let returnArr=[];
          
    for (let i = 0 ; i < arrStr.length ; i++) {
        if (arrStr[i] in obj) {
            returnArr.push(obj[arrStr[i]]);
        } else {
            throw new Error('letter ERROR');
        }
    }
    return returnArr;
}

async function displayResult (){
    try {
        let morseObj = await toJs(morse); 
        // the AWAIT blocks the flow of the async function that it's in. 
        // the await must get a Promise (or an async function which returns a promise)
        // but it returns a RESPONSE OBJECT (which we can use with .json() - this will give us a promise)
        // using await on this promise: await responseFromPromise.json() will give us the result
    let arrayLetter = await toMorse(morseObj);
    let str='';
    arrayLetter.forEach(element => {
        str+= `${element}\n`;
    });
    document.querySelector('container').innerText = str;
    } catch(err) {
        console.log(err.message);
    }
    
}
  
displayResult();