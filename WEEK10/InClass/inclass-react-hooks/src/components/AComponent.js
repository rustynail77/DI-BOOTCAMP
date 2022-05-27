import BComponent from './BComponent';
import {useContext} from 'react';
import {CWHContext} from './CounterWithHooks';

const AComponent = (props) => {
    const {counter,setCounter} = useContext(CWHContext);
    return(
        <>
            <div>
                <h1>A component</h1>
                <h2>{counter}</h2>
                <button onClick={()=>setCounter(counter=>counter+1)}>Add</button>
                <button onClick={()=>setCounter(counter=>counter-1)}>Subtract</button>
            </div>
            <BComponent />
        </>
    )
}
export default AComponent;