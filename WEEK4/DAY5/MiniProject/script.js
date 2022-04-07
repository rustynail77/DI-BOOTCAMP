import robots from './robots.js';

function displayRoboCard (roboItem) {
    let roboCard = document.createElement('div');
    roboCard.id = `robo${roboItem.id}`;
    roboCard.className = 'card';
    
    let myImg = document.createElement('img');
    myImg.src = roboItem.image;
    
    let myName = document.createElement('h3');
    myName.innerText = roboItem.name;
    
    let myEmail = document.createElement('div');
    myEmail.innerText = roboItem.email;
    
    roboCard.appendChild(myImg);
    roboCard.appendChild(myName);
    roboCard.appendChild(myEmail);       

    document.querySelector('#main').appendChild(roboCard);
}

robots.forEach((robot) => displayRoboCard(robot));

document.querySelector('#searchBar').addEventListener('keyup',(e)=>
    robots.forEach((robot)=> {
        if (!robot.name.toLowerCase().includes(e.target.value.toLowerCase())){
            document.querySelector(`#robo${robot.id}`).classList.add('hide-me');
        } else {
            document.querySelector(`#robo${robot.id}`).classList.remove('hide-me');
        }
    }))
    