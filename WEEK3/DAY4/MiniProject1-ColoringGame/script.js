let bgColors = ['red', 'orangered','orange','yellow','yellowgreen','lightgreen',
'green','turquoise','cyan','lightskyblue','dodgerblue','blue',
'darkblue','indigo','darkmagenta','violet','lightpink','lightgray','gray',
'black','white'];

function createColorPalette(bgColors) {
    for (let color of bgColors) {
        let colorBox = document.createElement('div');
        colorBox.style.backgroundColor = color;
        if (color=="black") colorBox.style.border = '1px solid white';
        document.querySelector('#sidebar').appendChild(colorBox);
    }
    
}

function createPaintBoard (rows, columns) {
    for (i = 1; i <= rows*columns; i++) {
        let boardBox = document.createElement('div');
        document.querySelector('#main').appendChild(boardBox);
        boardBox.addEventListener('mousedown', (e)=>{
            if (currColor != "") {
                e.target.style.backgroundColor = currColor;
            }
        });
        boardBox.addEventListener('mouseover', (e)=>{
            if (currColor != "" && mouseDown) {
                e.target.style.backgroundColor = currColor;
            }
    });
    }
}

function clearButt (){
    let boardBoxes = document.getElementById('main').getElementsByTagName('div');
    for (let box of boardBoxes) {
        box.style.backgroundColor = "white";
    }
}

let mouseDown = false;
let currColor = "white";
createColorPalette(bgColors);
createPaintBoard(30, 60);
document.getElementsByTagName('body')[0].addEventListener('mousedown', ()=>mouseDown = true);
document.getElementsByTagName('body')[0].addEventListener('mouseup', ()=>mouseDown = false);
document.querySelector('#sidebar').addEventListener('click',(e)=>{
    currColor = e.target.style.backgroundColor;
    document.querySelector('#currCol').style.backgroundColor = currColor;
});
document.querySelector('#clear').addEventListener('click', ()=>clearButt());