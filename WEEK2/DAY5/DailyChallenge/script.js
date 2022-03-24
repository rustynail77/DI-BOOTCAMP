function getUserInput() {
    // Prompt the user for a number to begin counting down bottles.
    let input = Number(prompt("How many bottles of beer would you require? "));
    while (isNaN(input)) {
        alert("That's not a number!");
        input = Number(prompt("How many bottles of beer would you require? "));
    }
    return input;
}


function processBottles(bottles, dropped) {
    let breakMe = false;
    // Note : Make sure you get the grammar correct. For 1 bottle, you pass “it” around. For more than one bottle, you pass “them” around.
    let itThem = (dropped < 2) ? "it" : "them";
    let lyrics = `
    ${bottles} bottles of beer on the wall
    ${bottles} bottles of beer`;
    
    if (bottles-dropped > 0) {
        lyrics += `
    Take ${dropped} down, pass ${itThem} around
    ${bottles-dropped} bottles of beer on the wall`; 
    } else {
        // The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.
        lyrics += `
    Take ${bottles} down, pass ${itThem} around
    no bottle of beer on the wall`;
        breakMe = true;
    }
    console.log(lyrics);
    bottles -= dropped;
    // instead of subtracting by 1, every time a bottle drops the subtracted number should go up by 1
    dropped++;
    if (!breakMe) {
        processBottles(bottles, dropped);
    } else {
        return;
    }
}

let bottles = getUserInput();
processBottles(bottles,1);