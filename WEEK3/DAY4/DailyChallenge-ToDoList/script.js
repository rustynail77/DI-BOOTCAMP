let listTasks = [];

function checkItem(element) {
    console.log(element);
}


function addTasks (e) {
    e.preventDefault();
    let input = document.getElementsByTagName('input')[0];
    if (input.value!="") {
        // console.log(input.value);
        listTasks.push(input.value);
        let newTask = document.createElement('div');
        newTask.className = 'listItem';
        
        let xButton = document.createElement('button');
        xButton.innerText = "x";
              
        let chkBox = document.createElement('input');
        chkBox.type = 'checkbox';
        chkBox.className = 'chk';
        chkBox.addEventListener('change', checkItem(e));

        let text = document.createTextNode(input.value);

        newTask.appendChild(xButton);
        newTask.appendChild(chkBox);
        newTask.appendChild(text);
        
        let list = document.getElementsByClassName('listTasks')[0];
        list.appendChild(newTask);
    }
}

document.querySelector('#add').addEventListener('click', addTasks);