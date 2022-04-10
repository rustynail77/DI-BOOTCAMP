// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, send the data as JSON.

let myForm = document.forms["myForm"];
myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const myFormData = new FormData(e.target);
    const data = {};
    myFormData.forEach((value,key)=>(data[key]=value));
    console.log(data);
});