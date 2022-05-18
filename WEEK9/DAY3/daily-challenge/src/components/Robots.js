import {connect} from 'react-redux';
import {myFetch} from '../redux/actions';

const Robots = (props) => {
    // console.log(props.fetchInfo());
    return (
       <>
        <h1>Robot Friends</h1>Search:<input type="text"/>
        {props.fetchInfo().map(item=>{
            // return (
            //     <>
            //         <p>{item.name}</p>
            //     </>
            // )
            console.log(item)
        })}
       </> 
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInfo: () => dispatch(myFetch())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Robots);