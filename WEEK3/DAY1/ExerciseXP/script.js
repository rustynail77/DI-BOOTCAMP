// Exercise 1
// In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
document.getElementById("navBar").setAttribute("id","socialNetworkNavigation");

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
let newLi = document.createElement("li");
// Create a new text node with “Logout” as its specified text.
let logOut = document.createTextNode("Logout");
// Append the text node to the newly created list node (li).
newLi.appendChild(logOut);
// Finally, append this updated list node to the unordered list above, using the appendChild method.
document.getElementsByTagName("ul")[0].appendChild(newLi);
// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).
let myUl = document.getElementsByTagName("ul")[0];
console.log(myUl.firstElementChild.textContent, myUl.lastElementChild.textContent);


// Exercise 2 : Users
// In the HTML above change the name “Pete” to “Richard”.
let uls = document.querySelectorAll('.list');
uls[0].lastElementChild.textContent = 'Richard';

// Change each first name of the two <ul>'s to your name.
uls.forEach((aul)=> aul.firstElementChild.textContent = "Liron");

// At the end of each <ul> add a <li> that says “Hey students”.
uls.forEach((listElement)=> {
    let anotherLi = document.createElement('li');
    let dudesText = document.createTextNode("Hey dudes!");
    anotherLi.appendChild(dudesText);
    listElement.appendChild(anotherLi);
});

// Delete the name Sarah from the second <ul>.
uls[1].removeChild(uls[1].children[1]);
// Bonus
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.
uls.forEach((aul, index) => {
    if (index == 0) aul.classList.add("university", "attendance");
    aul.classList.add("student_list")
});


// Exercise 3 : Users And Style
// Add a “light blue” background color and some padding to the <div>.
let myDiv = document.querySelectorAll('div')[2];
myDiv.style.backgroundColor = "lightblue";
myDiv.style.padding = "5px";

// Do not display the first name (John) in the list.
let myOtherUl = document.querySelectorAll('ul')[3];
myOtherUl.firstElementChild.style.display = "none";

// Add a border to the second name (Pete).
myOtherUl.lastElementChild.style.border = "1px solid black";

// Change the font size of the whole body.
document.body.style.fontSize = "20px";

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if (myDiv.style.backgroundColor = "lightblue") {
    alert(`Hello ${myOtherUl.firstElementChild.textContent} and ${myOtherUl.lastElementChild.textContent}`);
}