import {useState, useEffect, createContext} from 'react';
import AComponent from './AComponent';

export const CWHContext = createContext(null);

const CounterWithHooks = (props) => {

    const [counter,setCounter] = useState(0);
//         ^state   ^setState       ^initial value
    const [name, setName] = useState('aaa');
    // const [users, setUsers] = useState([]);

useEffect(() => {
    console.log('useEffect=>', counter, name); // on every mount/update - useEffect gets updated so it uses componenetDidMount and componentDidUpdate
})

useEffect(() => {
    console.log('useEffect=>', counter); // on every mount/update - useEffect gets updated so it uses componenetDidMount and componentDidUpdate
    setName('what...?')
},[counter])   // the [] means nothing will be updated on componentDidUpdate. only on mount. 
        // if we put "counter" in the [] -- [counter] -- = only counter will be updated on componentDidUpdate


useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res=>res.json())
    .then(data=> {
        console.log('users',data);
        // setUsers(data);
    })
    .catch(e=>{
        console.log(e);
    })
},[])


    return (
        <>
            <button name="minus" onClick={()=>{setCounter(counter-1)}}>Subtract</button>
            <h2>Counter: {counter}</h2>
            <button name="plus" onClick={()=>{setCounter(counter+1)}}>Add</button>
            {/* {
                users.map((item,i)=>{
                    return(
                        <div key={i}>
                            {item.name}
                        </div>
                    )
                })
            } */}
            {/* <AComponent counter={counter} setCounter={setCounter}/> */}
            <CWHContext.Provider value={{counter, setCounter}}>
                <AComponent />
            </CWHContext.Provider>
        </>
    )
}
export default CounterWithHooks;