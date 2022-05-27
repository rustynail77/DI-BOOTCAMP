import {useContext} from 'react';
import {CWHContext} from './CounterWithHooks';


const BComponent = (props) => {
    const {counter,setCounter} = useContext(CWHContext);

    return(
        <>
            <div>
                <h1>B component</h1>
                <h2>{counter}</h2>
                <button onClick={()=>setCounter(counter=>counter+1)}>Add</button>
                <button onClick={()=>setCounter(counter=>counter-1)}>Subtract</button>
            </div>
        </>
    )
}
export default BComponent;