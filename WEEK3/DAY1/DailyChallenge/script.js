// Create an array which value is the planets of the solar system.

class planetStruct {
    constructor (
        name,
        moons
    ) {
        this.name = name;
        this.moons = moons;
    }
}

const planets = [
    new planetStruct ("Mercury", []),
    new planetStruct ("Venus", []),
    new planetStruct ("Earth", ["Moon"]),
    new planetStruct ("Mars", ["Deimos","Phobos"]),
    new planetStruct ("Jupiter", ["Io", "Europa", "Ganymede", "and at least 76 others..."]),
    new planetStruct ("Saturn", ["Enceladus", "Titan", "and some 80 others..."]),
    new planetStruct ("Uranus", ["Oberon", "Titania", "Juliet", "Puck", "Cordelia", "Ophelia", "Bianca", "Desdemona", "Portia", "Rosalind", "Cressida", "Belinda", "and others..."]),
    new planetStruct ("Neptune", ["Despina", "Galatea", "Triton", "and at least 11 others"]),
    new planetStruct ("Pluto", ["Charon", "Hydra", "Kerberos", "Nix", "Styx"]),
];

// For each planet in the array, create a <div> using createElement. 
// This div should have a class named "planet".
// Each planet should have a different background color. (Hint: add a new class to each planet).
// Finally append each div to the <section> in the HTML (presented below).
function createSolarSystem() {
    planets.forEach(function (element) {
        let myDiv = document.createElement("div");
        let myPlanet = element["name"];
        myDiv.classList.add("planet", myPlanet.toLowerCase());
        myDiv.innerHTML = `<h3>${myPlanet}<h3>`;
        // Bonus: Do the same process to create the moons.
        let myMoons = element["moons"];
        myMoons.forEach(function (moonEle) {
            let myInnerDiv = document.createElement("div");
            myInnerDiv.classList.add("moon");
            myInnerDiv.innerText = moonEle;
            myDiv.appendChild(myInnerDiv); 
        })
        document.querySelector(".listPlanets").appendChild(myDiv);
    });    
}

createSolarSystem();