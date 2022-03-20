let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

let itemToRemove = fruits.indexOf("Banana");
fruits.splice(itemToRemove, 1);
fruits.sort();
fruits.push("Kiwi");
fruits.shift();
fruits.reverse();