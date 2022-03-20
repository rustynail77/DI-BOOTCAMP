let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: Output 55, bc a and b are assigned with numbers
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: Output 23. bc a was reassigned with 2, so 21+2=23
    // Actual: 2030
    // c has no value so its value is "undefined". it was only declared but not defined or assigned
    // the outcome of console.log(3 + 4 + '5'): my initial reply was: should be 12, as js should convert '5' to 5 in this case. 
    // but it was actually 75 as js treated 3+4 as numbers and summed them to 7, but then concatenated the 5 to 75. interesting indeed!

