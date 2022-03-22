5 + "34"
// Prediction: 534. js will convert 34 to number and summarize
// Actual: 534

5 - "4"
// Prediction: 1. js will convert string "4" to number 4 and subtract
// Actual: 1

10 % 5
// Prediction: 0. 10 divided by 5 has no remainder
// Actual: 0

5 % 10
// Prediction: 5. 5 modulo 10 is 5 remainder basically, as 5 cannot contain 10 characters
// Actual: 5

"Java" + "Script"
// Prediction: "JavaScript", as js concatenates the two strings
// Actual: 'JavaScript'

" " + " "
// Prediction: "  ", as js treats space as a string and concatenates the two strings
// Actual: '  '

" " + 0
// Prediction: " 0", as js converts 0 to string and concatenates the two strings
// Actual: ' 0'

true + true
// Prediction: 2, as js treats true as the number 1 and false as 0
// Actual: 2

true + false
// Prediction: 1, as js treats true as the number 1 and false as 0. thus 1 + 0 = 1;
// Actual: 1

false + true
// Prediction: 1, as js treats true as the number 1 and false as 0. thus 0 + 1 = 1;
// Actual: 1

false - true
// Prediction: -1, as js treats true as the number 1 and false as 0. thus 1 - 0 = -1;
// Actual: -1

!true
// Prediction: false, as not true = false
// Actual: false

3 - 4
// Prediction: -1. subtraction of numbers
// Actual: -1

"Bob" - "bill"
// Prediction: NaN, as js cannot subtract strings
// Actual: NaN