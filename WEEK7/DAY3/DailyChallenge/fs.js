const fs = require("fs");

fs.readFile('./rightLeft.txt', (err,data)=>{
    if(err){
        console.log(err);
    } else {
        let leftRight = data.toString();
        let position = 0;
        let counter = 0;
        let checker = false;
        let firstPosition;
        for (i of leftRight){
            if(position==-1 && !checker){
                checker = true;
                firstPosition = counter;
            }
            if (i=='>'){
                position++;
            } else {
                position--;
            }
            counter++;
        }
        console.log('Total steps:', position);
        console.log(`First time we hit -1 is after ${firstPosition} steps`);
    }
});