typeof(15)
// Prediction: number, as the returned value is the type of the value 15
// Actual: number

typeof(5.5)
// Prediction: number, as the returned value is the type of the value 5.5
// Actual: number

typeof(NaN)
// Prediction: ?
// Actual: number

typeof("hello")
// Prediction: string, as the type of the variable is string
// Actual: string

typeof(true)
// Prediction: boolean, as the type of the variable that carries "true" and "false" is boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: true, as the expressions result (1 not equal to 2) is true
// Actual: boolean

"hamburger" + "s"
// Prediction: "hamburgers", as js concatenates the 2 values into 1
// Actual: 'hamburgers'

"hamburgers" - "s"
// Prediction: NaN, as js cannot subtract strings
// Actual: NaN

"1" + "3"
// Prediction: "13", as js treats both values as strings due to the quotation marks and thus concatenates them to one string
// Actual: '13'

"1" - "3"
// Prediction: -2, as js converts both to integers
// Actual: -2

"johnny" + 5
// Prediction: "johnny5", as as js treats the 5 as a string and thus concatenates both values to one string
// Actual: 'johnny5'

"johnny" - 5
// Prediction: NaN, as js cannot subtract from the string
// Actual: NaN

99 * "hello"
// Prediction: NaN, as js cannot multiply a string
// Actual: NaN

1 != 1
// Prediction: false as the expressions result (1 not equal to 1) is false
// Actual: false

1 == "1"
// Prediction: true as js converts the string "1" to the number 1 and the comparison returns true
// Actual: true

1 === "1"
// Prediction: false as in this case js compares the exact values typed and the number 1 isn't exactly the same as the string "1"
// Actual: false