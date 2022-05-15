import {connect} from 'react-redux';
import { INCREASE_COUNT } from '../actions/index';
import { DECREASE_COUNT } from '../actions/index';

export const Counter = (props) => {
    return (
        <>
            <button onClick={props.decreaseCounter}>-</button>
            <div>Counter: {props.counter_in_Counter}</div>
            <button onClick={props.increaseCounter}>+</button>
        </>
    )

}

const mapStateToProps = (state)=>{
    return {
        counter_in_Counter: state.count //importing property_one from 'state' in reducers.js 
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      increaseCounter: () => dispatch(INCREASE_COUNT()),
      decreaseCounter: () => dispatch(DECREASE_COUNT())
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
