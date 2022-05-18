import {connect} from 'react-redux';
import {handleNames} from '../redux/actions'

const SecondNameComponent = (props) => {
  return (
    <>
      Second Name:<input type='text' name='sname' onChange={props.handleChange}/>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange:(e)=> dispatch(handleNames('SECONDE_NAME',e.target.value))

  }
}

export default connect(null,mapDispatchToProps)(SecondNameComponent);
