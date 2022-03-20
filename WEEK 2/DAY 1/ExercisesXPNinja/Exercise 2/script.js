const input = prompt("Enter numbers separated by commas> ");
const inpArray = input.split(",");
console.log(inpArray);
let len = inpArray.length;
let result = 0;
for (let i=0; i<len; i++) {
    result += parseInt(inpArray[i],10);
}
console.log(result);
