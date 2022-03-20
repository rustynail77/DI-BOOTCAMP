const input = prompt("Input number> ");
let myBoom = "boom";
if (input > 2) {
    myBoom = "b";
    for (i=1;i<=input;i++) {
        myBoom += "o";
    }
    myBoom +="m";
    if (input % 2 === 0) {
        myBoom += "!";
    }
    if (input % 5 === 0) {
        myBoom = myBoom.toUpperCase();
    }
}
console.log(myBoom);