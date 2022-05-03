function getProducts(){
    fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(e=>{
        console.log(e);
    })
}

getProducts();