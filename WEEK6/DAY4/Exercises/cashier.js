// 5. When the user is done with his shopping, he will click on the "Pay button" (which is actually an anchor) and it will redirect him to another HTML page. 
//      This HTML page is linked to another Javascript file. Using the DOM display all the items that the user bought and the total price he needs to pay as well as a "Submit payment" Button
// 6. When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.
let myCart = JSON.parse(localStorage.getItem('cart'));
(()=>{
    let summary = 0;
    for (const item of myCart) {
        let myDiv = document.createElement('div');

        let itemDetails = document.createElement('div');
        itemDetails.innerText = `${item.name} => ${item.price}`;
        
        myDiv.appendChild(itemDetails);
        summary += Number(item.price);

        document.getElementById('itemsList').appendChild(myDiv);
    }
    let mySum = document.createTextNode(`Total: ${summary}`);
    document.getElementById('itemsList').appendChild(mySum);
})()

document.getElementById('payUp').addEventListener('click', () =>{
    document.getElementById('message').appendChild(
        document.createTextNode('Payment Successful!'));
    localStorage.clear();
})