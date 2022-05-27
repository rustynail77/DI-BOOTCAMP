import {useReducer, useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const initState = {
    result: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'PLUS':
            return {...state, result:state.result+action.payload}
        case 'MINUS':
            return {...state, result:state.result-1}
        case 'DIVIDE':
            return {...state, result:state.result/2}
        case 'MULTIPLY':
            return {...state, result:state.result*2}
        default:
            return {...state}
    }
}

const Calculator = (props) => {
    const myInput = useRef(); // used like a global variable, without rendering on every change
    const id = useRef(0);
    const [state,dispatch] = useReducer(reducer,initState);
    
    const handleRedirect = () => {
        navigate('/test');
      }

    const navigate = useNavigate();

    useEffect(()=>{
        console.log(myInput.current.name)
    },[]);

    return (
        <>
            <button onClick={handleRedirect}>Redirect to Test</button>
            <br />
            <h1>{id.current}</h1>
            <input type="text" name="simpleinput" ref={myInput} />
            <h2>Simple Calculator</h2> 
            Result: {state.result}
            <button onClick={()=>dispatch({type:'PLUS', payload:5})}>Plus 5</button>
            <button onClick={()=>dispatch({type:'MINUS'})}>Minus 1</button>
            <button onClick={()=>dispatch({type:'DIVIDE'})}>Divide by 2</button>
            <button onClick={()=>dispatch({type:'MULTIPLY'})}>Multiply by 2</button>
        </>
    )
}

export default Calculator;