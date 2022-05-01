import DisplayItem from './displayItem.js';

function editItem(e) {
    localStorage.setItem('itemPos', getItemPos(e));
    location.href = './index.html';
}

function addNewTask () {
    localStorage.removeItem('itemPos');
    location.href = './index.html';
}

function deleteAllTasks(e) {
    if (confirm('Are you sure you wish to DELETE ALL ITEMS?')) {
        document.querySelector('#container').innerHTML = '';
        localStorage.clear();
    }
}

function updateTheList(index, isCompletedVal) {
    if (index) theList[index].isCompleted = isCompletedVal;
    localStorage.setItem('theList', JSON.stringify(theList));
}

function getDate (myDate) {
    return `${myDate.getDate()}/${myDate.getMonth()+1}/${myDate.getFullYear()}`;
}

function getItemPos (e) {
    let child = e.target.parentNode;
    let parent = child.parentNode; 
    child.classList.toggle('checked');
    let childPosition =  Array.prototype.indexOf.call(parent.children, child);
    return childPosition;
}

function removeItemFromDOM(e) {
    if (confirm('Are you sure you wish to delete item?')) {
        theList = theList.filter((val,i)=>{return i!=getItemPos(e)});                          
        updateTheList();
        let itemToRemove = document.getElementsByClassName('item')[getItemPos(e)];
        itemToRemove.parentNode.removeChild(itemToRemove);
    }
}

function createEleInTask (currItem) {
    let myItem = document.createElement(currItem.eleType);
    if (currItem.eleType==='input') {
        myItem.type = currItem.inpuType;
        if (currItem.inpuType==='checkbox') {
            myItem.checked = currItem.text;
            myItem.addEventListener('change', e =>
                updateTheList(getItemPos(e), myItem.checked));
        }
    } else {
        if (currItem.eleType==='button'){
            if (currItem.text==='Description') {
                myItem.className = "descButton";
                myItem.addEventListener('click',(e)=>{
                    let element = e.target.parentNode;
                    element.getElementsByClassName('desc')[0].classList.toggle('hideDesc');
                })
            } else {
                if (currItem.text==='x') myItem.addEventListener('click',(e)=>removeItemFromDOM(e));
                if (currItem.text==='Edit task') myItem.addEventListener('click',(e)=>editItem(e));
            }
        }
    }       
    if (currItem.inpuType==='desc') {myItem.className = 'desc hideDesc'};
    myItem.innerText = currItem.text;
    
    return myItem;
}

function createTask(item){
    let myDiv = document.createElement('div');
    myDiv.className = 'item';
    
    let startDt = (item.startDT) ? getDate(new Date(item.startDT)) : '-';
    const date = new Date();
    let daysLeft = Math.floor((Date.parse(item.endDT) - date) / (1000*60*60*24))+1;
    if (daysLeft<0) daysLeft = 0;
    if (isNaN(daysLeft)) daysLeft = '?';

    let dispItems = [
        new DisplayItem('input', item.isCompleted, 'checkbox'),
        new DisplayItem('button', 'Edit task'),
        new DisplayItem('button', 'x'),
        new DisplayItem('h2', item.name),
        new DisplayItem('div', `Start date: ${startDt}`),
        new DisplayItem('div', `Days left: ${daysLeft}`),
        new DisplayItem('div', item.description, 'desc'),
        new DisplayItem('button', 'Description')
    ];
    
    dispItems.forEach((currItem) => {
        myDiv.appendChild(createEleInTask(currItem));
    });

    document.querySelector('#container').appendChild(myDiv);
    if (myDiv.getElementsByTagName('input')[0].checked) myDiv.classList.add('checked');
    if (daysLeft < 1 && !myDiv.getElementsByTagName('input')[0].checked) {
        myDiv.classList.add('expiredTask');
    }
}

function getSortedListFromStorage() {
    let theList = JSON.parse(localStorage.getItem('theList'));
    theList.sort(function(a,b){
        return new Date(a.startDT) - new Date(b.startDT);
    });
    localStorage.setItem('theList', JSON.stringify(theList));
    return theList;
}

let theList = getSortedListFromStorage();
theList.forEach(item=>createTask(item));

document.getElementById('addTaskButton').addEventListener('click',(e)=>addNewTask(e));
document.getElementById('deleteTasksButton').addEventListener('click',(e)=>deleteAllTasks(e));

