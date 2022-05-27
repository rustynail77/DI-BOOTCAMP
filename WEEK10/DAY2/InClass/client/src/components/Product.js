import {useEffect, useState} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom'

const Product = (props) => {
    const [product,setProduct] = useState([]);
    const params = useParams();
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const navigate=useNavigate();

    useEffect (()=>{
        fetch(`/api/products/prd/${params.id}`)
        .then(res=>res.json())
        .then(data=> {
            setProduct(data);
            setName(data[0].name);
            setPrice(data[0].price);
        })
        .catch(err => {
            console.log(err);
        })
    },[])
    
    const update = (e) => {
        e.preventDefault();
        fetch(`/api/products/${params.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,price})
        })
        .then(res=>res.json())
        .then(data=>{
            setProduct(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const del =() => {
        fetch(`/api/products/${params.id}`, {
            method: 'DELETE',
        })
        .then(res=>res.json)
        .then(data=>{
            navigate('/');
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={update}>
                Name: <input type='text' onChange={(e)=>setName(e.target.value)} value={name} /><br />
                Price: <input type='text' onChange={(e)=>setPrice(e.target.value)} value={price} />
                <input type='submit' value='Submit' />
            </form>
            <h2>Delete Product</h2>
            <button onClick={del}>Delete</button>
            {
              product.map(item=> {
                  return(
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <h1>{item.price}</h1>
                        <Link to='/'> Show All </Link>
                    </div>
                  )
              })  
            }
        </div>
    )
}

export default Product;