function showAllShopProducts() {
    fetch('http://localhost:5001/api/products') //this is the api the server uses to get all products from the db
    // we are on the client side, so we can't reach the db. we can only get the data our server sends us
    .then(res=>res.json())
    .then(data=>{
       renderProducts(data);
    })
    .catch(err=>{
        console.log(err);
    })
}

function renderProducts(arr) {
    const root = document.getElementById('root');
    root.innerHTML = ''; //clear the current data printed on 'root' div at shop.html
    arr.forEach((item,i)=>{
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const h4 = document.createElement('h4');
        const a = document.createElement('a');
        h2.innerText = item.name;
        h4.innerText = item.price;
        a.innerText = 'Show Product';
        a.setAttribute('href',`http://localhost:5001/api/products/${item.id}`);
        div.appendChild(h2);
        div.appendChild(h4);
        div.appendChild(a);
        root.appendChild(div);
    })
}

function searchProduct () {
    const query = document.getElementById('productname').value;
    fetch(`http://localhost:5001/api/search?q=${query}`)
    .then(res=>res.json())
    .then(data=> {
        renderProducts(data);
    })
    .catch(err => {
        console.log(err);
    })

}

showAllShopProducts();