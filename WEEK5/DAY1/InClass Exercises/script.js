// const jsonString = `{
//     "employees":[
//         {"firstName":"John", "lastName":"Doe"},
//         {"firstName":"Anna", "lastName":"Smith"},
//         {"firstName":"Peter", "lastName":"Jones"}
//     ]
// }`

// //convert a JSON string into a Javascript Object 
// // that I can manipulate using Javascript
// const data = JSON.parse(jsonString);
// console.log(data) //data is a variable containing a Javascript Object


// const family = {
// 	members: 4,
// 	lastname : "Smith",
// }

// the stringify method does the oposite of parse
// it converts a Jasvascript object into a JSON string
// const familyJson = JSON.stringify(family);
// console.log(familyJson)
// console.log(typeof familyJson) //string
// // {"members":4,"lastname":"Smith"}


// # Exercise with JSON
// 1. Parse this JSON string into a JS object
// 2. Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// 3. Create another variable to stringify the JS object. Console.log the variable
// 4. Then use pretty print (look at the lesson)
let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`

let myJSObj = JSON.parse(jsonString);
let options = myJSObj.quiz.sport.q1.options;
for (i of options) console.log(i);

let backToJSON = JSON.stringify(myJSObj, null, 2);
console.log(backToJSON);
