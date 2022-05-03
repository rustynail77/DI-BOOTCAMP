const fs = require("fs");

console.log(1);
fs.readFile('./file', (err,data)=>{
    if(err){
        console.log(err);
    } else {
        console.log('non-sync, runs after the whole stream',JSON.parse(data.toString()));
    }
})
const f = fs.readFileSync('./file');
console.log('synced (blocking stream):',JSON.parse(f.toString()));

console.log(2);