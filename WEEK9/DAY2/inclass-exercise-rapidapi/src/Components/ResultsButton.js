import {connect} from 'react-redux';
import {getResults} from '../redux/actions';
import {saveDataToResults} from '../redux/actions';

const ResultsButton = (props) => {
    return (
        <>
            <button onClick={()=>props.handleClick(props.first,props.second)}>Get Results</button>
        </>
    )
}

const mapStateToProps = (state)=>{
    return {
        first: state.fname, second: state.sname
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (fname,sname) => getResults({fname,sname})
        .then(data=>dispatch(saveDataToResults(data)))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ResultsButton);