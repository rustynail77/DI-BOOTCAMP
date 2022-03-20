5 >= 1
//Prediction: true. 5 is bigger than 1. the expression is true.
//Outcome: true

0 === 1
//Prediction: false. 0 is not equal to 1
//Outcome: false

4 <= 1
//Prediction: false. 4 isn't smaller nor equal to 1. the expression is false
//Outcome: false

1 != 1
//Prediction: false. one isn't different from 1. the expression is false
//Outcome: false

"A" > "B"
//Prediction: false. js treats strings as hierarchial. "B" is larger than "A"
//Outcome: false

"B" < "C"
//Prediction: true. js treats strings as hierarchial. "C" is larger than "B"
//Outcome: true

"a" > "A"
//Prediction: true. js treats strings as hierarchial. capital letters are considered "smaller" than lower case letters
//Outcome: true

"b" < "A"
//Prediction: false. js treats strings as hierarchial. the whole set of capital letters are considered "smaller" than the whole set of lower case letters
//Outcome: false

true === false
//Prediction: false. bc true isn't equal to false. the expression is false.
//Outcome: false

true != true
//Prediction: false. the expression is false bc true is not different than true
//Outcome: false
