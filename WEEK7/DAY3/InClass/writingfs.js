const fs = require('fs');

let value = "abcdef";
fs.writeFile('./newfile', value, (err)=>{
    if(err){
        console.log(err);
    }
})

let kaka = [
    {id: 1, name: "abcdef", shushu: "hashual"},
    {id: 2, name: "poopoo", shushu: "eatda"},
];

fs.writeFile('./newfile1', JSON.stringify(kaka), (err)=>{
    if(err){
        console.log(err);
    }
})

// append. if file doesn't exist - it will create it
let str = 'a b c d';
fs.appendFile('./bbb', str, err=>{
    if(err) {
        console.log(err);
    }
})


// // delete
// fs.unlink('./bbb', err=>{
//     if(err) {
//         console.log(err);
//     }
// })

//copy
fs.copyFile('./file', './file2', err=>{
    console.log(err);
})