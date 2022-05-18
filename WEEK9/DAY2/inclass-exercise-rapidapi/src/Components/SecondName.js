import {connect} from 'react-redux';
import {handleNames} from '../redux/actions';

const SecondName = (props) => {
    return (
        <>
            Second name:<input type="text" name='sname' onChange={props.handleChange} />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e) => dispatch(handleNames('SAVE_SNAME',e.target.value))
    }
}

export default connect(null,mapDispatchToProps)(SecondName);