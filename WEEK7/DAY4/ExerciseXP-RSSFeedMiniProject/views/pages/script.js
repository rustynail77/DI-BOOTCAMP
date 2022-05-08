function searchTitle() {
    const title = document.getElementById('title').value;
    fetch('http://localhost:5001/search/title',{
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({title})
    })
    .then(res => res.text())
    .then(htmlStr => {
      document.open();
      document.write(htmlStr);
      document.close();
    })
    .catch(err=>{
        console.log(err);
    })
}

function searchCategory() {
    const category = document.getElementById('category').value;
    fetch('http://localhost:5001/search/category',{
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({category})
    })
    .then(res => res.text())
    .then(htmlStr => {
      document.open();
      document.write(htmlStr);
      document.close();
    })
    .catch(err=>{
        console.log(err);
    })
}