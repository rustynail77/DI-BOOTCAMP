// Exercise 1
const fs = require('fs');

fs.readFile('./file', (err,data)=>{
    if(err){
        console.log(err);
    } else {
        console.log(data.toString());
    }
})

// Exercise 2
let value = "A new text file data";
fs.writeFile('./newfile', value, (err)=>{
    if(err){
        console.log(err);
    }
})

let str = " Buy orange juice";
fs.appendFile('./newfile', str, err=>{
    if(err) {
        console.log(err);
    }
})

fs.unlink('./newfile', err=>{
    if(err) {
        console.log(err);
    }
})

    