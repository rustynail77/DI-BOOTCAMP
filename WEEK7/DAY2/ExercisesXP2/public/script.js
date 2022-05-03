function fetchData(){
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => {
    console.log(data);
    })
    .catch(e=>{
    console.log(e)
    })
}
console.log('running script.js');
fetchData();

