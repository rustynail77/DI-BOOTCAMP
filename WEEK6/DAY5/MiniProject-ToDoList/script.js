import Item from './item.js';

function submitForm(e) {
    e.preventDefault();
    let myForm = document.forms[0];
   
    let item = new Item(
        myForm.elements['name'].value,
        myForm.elements['description'].value,
        myForm.elements['start-dt'].value,
        myForm.elements['end-dt'].value,
        false
    );

    let allData = JSON.parse(localStorage.getItem('theList')) || [];
    if (itemPos) {
        allData[itemPos] = item
    } else {
        allData.push(item)
    }
    localStorage.setItem('theList', JSON.stringify(allData));
    location.href = './display_page.html';
}

function loadFormValues () {
    let singleItem = JSON.parse(localStorage.getItem('theList'))[itemPos];
    let form = document.forms[0];
    form.elements['name'].value = singleItem.name;
    form.elements['description'].value = singleItem.description;
    form.elements['start-dt'].value = singleItem.startDT;
    form.elements['end-dt'].value = singleItem.endDT;
}

let itemPos = localStorage.getItem('itemPos');
if (itemPos) {
    loadFormValues(itemPos);
    document.getElementsByTagName('h1')[0].innerText = 'Edit task';
}

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', e => submitForm(e));

let toListButton = document.getElementById('toList');
toListButton.addEventListener('click', () => location.href = './display_page.html');