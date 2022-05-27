import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');

    // useEffect(()=> {
    //     fetch('http://localhost:5000/api/products/all')
    //     .then(res => res.json())
    //     .then(data=> {
    //         setProducts(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // },[]);
    
    // the above works. we can do the same, with async func:

    useEffect(()=> {
        const getProducts = async() => {
            try {
                // const res = await fetch('http://localhost:5000/api/products/all'); 
                //we added "proxy":"http://localhost:5000/" to the package.json file, so we can use fetch this way now:
                const res = await fetch('/api/products/all');
                const data = await res.json();
                setProducts(data);
            }  
            catch(err){
                console.log(err);
            }
        }
        getProducts()
    },[]);

    const search = () => {
        fetch(`/api/products/search?q=${searchText}`)
        .then(res=>res.json())
        .then(data=> {
            setProducts(data)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const add = (e) => {
        e.preventDefault();
        fetch('/api/products',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,price})
        })
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return(
        <div>
            <h1>Shop</h1>
            <div>
                Search: <input type="text" onChange={(e)=>setSearchText(e.target.value)} />
                <button onClick={search}>Search</button>
            </div>
            <h2>Add Product</h2>
            <form onSubmit={(e)=>add(e)}>
                Name: <input type='text' onChange={(e)=>setName(e.target.value)} /><br />
                Price: <input type='text' onChange={(e)=>setPrice(e.target.value)} />
                <input type='submit' value='Submit' />
            </form>
            {
                products.map(item => {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                            <Link to={`/${item.id}`} > Show </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;