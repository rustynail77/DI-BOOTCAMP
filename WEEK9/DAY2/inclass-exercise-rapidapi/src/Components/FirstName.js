import {connect} from 'react-redux';
import {handleNames} from '../redux/actions';

const FirstName = (props) => {
    return (
        <>
            First name:<input type="text" name='fname' onChange={props.handleChange} />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e) => dispatch(handleNames('SAVE_FNAME',e.target.value))
    }
}

export default connect(null,mapDispatchToProps)(FirstName);