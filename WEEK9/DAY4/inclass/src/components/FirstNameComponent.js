import {connect} from 'react-redux';
import {handleNames} from '../redux/actions';

const FirstNameComponent = (props) => {
  
  // const handleChange = (e) => {
  //   props.a(e)
  // }
  return (
    <>
      First Name:<input type='text' name='fname' onChange={props.a}/>
    </>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    a: (e) => dispatch(handleNames('FIRST_NAME',e.target.value))
  }
}

export default connect(null,mapDispatchToProps)(FirstNameComponent);
