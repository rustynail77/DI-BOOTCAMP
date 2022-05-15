import {connect} from 'react-redux';
import {handleChangeByClick} from '../redux/actions';

const Hello = (props) => {
    return (
        <>
            {/* property_one from App.js => send it with props */}
            <p>property_one from App.js: {props.text_from_app}</p>
            {/* property_one from reducer => connect this Hello Component to store */}
            <p>property_one from reducer: {props.props_one_from_redux}</p>
            <p>text from store: {props.my_text}</p>
            <button onClick={props.myTextChange}>Change my_text to props two after...</button>
        </>
    )
}

const mapStateToProps = (state)=>{
    console.log('state from hello', state);
    return {
        props_one_from_redux: state.property_one, //importing property_one from 'state' in reducers.js 
        my_text: state.text //importing text from 'state' in reducers.js
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      myTextChange: () => dispatch(handleChangeByClick()),
    }
}  
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
