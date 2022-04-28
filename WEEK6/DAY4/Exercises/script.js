// # Exercise - Create a shopping List
// 1. Create an HTML file
// 2. Create a JS file - Add the below array of objects inside your javascript file.
// 3. Using a self invoking function, and using the DOM - add the products to the page and make them clickable.
// 4. The user clicks on the item to add them to his cart. The cart is an array of items, saved in the localstorage. Each item is an object containing the name of the product and the price.
// 5. When the user is done with his shopping, he will click on the "Pay button" (which is actually an anchor) and it will redirect him to another HTML page. 
//      This HTML page is linked to another Javascript file. Using the DOM display all the items that the user bought and the total price he needs to pay as well as a "Submit payment" Button
// 6. When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.

let products = [
        {
            id: 0,
            name: "Deluxe Bicycle",
            url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
            price: 499.98
        },
        {
            id: 1,
            name: "Super Deluxe bagpack",
            url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg", 
            price: 134.99
        },
        {
            id: 2,
            name: "Super Duper Scooter",
            url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg", 
            price: 1090.95
        },
        {
            id: 3,
            name: "Smartphone",
            url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg", 
            price: 399.99
        }
    ];

let myCart = JSON.parse(localStorage.getItem('cart')) || [];

(()=>{
    for (const item of products) {
        let newDiv = document.createElement('div');
        newDiv.className='item';
        
        let itemName = document.createElement('div');
        itemName.className='itemName';
        itemName.innerText=item.name;
        
        let itemPrice = document.createElement('div');
        itemPrice.className='itemPrice';
        itemPrice.innerText=item.price;
        
        let itemImg = document.createElement('img');
        itemImg.width='100';
        itemImg.src=item.url;

        let myButt = document.createElement('button');
        myButt.innerText = 'Add to Cart';
        myButt.addEventListener('click',(e)=>{
            let itemName = e.target.parentNode.querySelector('.itemName').innerText;
            let itemPrice = e.target.parentNode.querySelector('.itemPrice').innerText;
            let myItem = {'name': itemName, 'price': itemPrice};
            myCart.push(myItem);
            localStorage.setItem('cart',JSON.stringify(myCart));
            alert('Item added to cart!');
        });

        newDiv.appendChild(itemImg);
        newDiv.appendChild(itemName);
        newDiv.appendChild(itemPrice);
        newDiv.appendChild(myButt);

        document.getElementById('container').appendChild(newDiv);
    }
})()

// see this page: https://www.section.io/engineering-education/how-to-use-localstorage-with-javascript/