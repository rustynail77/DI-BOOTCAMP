// Exercise 1 : Move The Box
// Move the box from left to right

function myMove() {
      let start = Date.now(); // start date

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        box.style.left = timePassed / 5 + 'px';
        if (timePassed > 2000) {
          clearInterval(timer);
        }
      }, 20);
    }

let box = document.getElementById('animate');
box.addEventListener("click", myMove());


// Exercise 2: Drag & Drop
// Create a draggable square/box element in your HTML file.
// In your javascript file add the functionality which will allow you to drag the square/box and drop it into a larger box.

let element = document.getElementById("box1");
element.setAttribute('draggable','true');

element.addEventListener("dragend", function(event) {
    let _x = event.clientX;
    let _y = event.clientY;
    console.log(_x, _y);
    if (_x < 300 && _y < 350 && _y > 50) {
      event.target.style.left = _x + "px";
      event.target.style.top = _y + "px";
      event.target.style.position = "absolute";
    }
  });