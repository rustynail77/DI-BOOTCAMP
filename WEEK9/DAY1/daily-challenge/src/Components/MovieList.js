import {connect} from 'react-redux';
import {handleClickFromActions} from '../actions/actions';

const MovieList = (props) => {
    return (
        <>
            <h3>MovieList:</h3>
            {
            props.movies.map((movie, i)=>{
                return (
                <div key={i} id={i}>
                    <span>{movie.title} </span><button onClick={props.handleClick}>Details</button>
                </div>
                )
                })
            }                              
        </>
    )
}

const mapStateToProps = (state)=>{
    return {
        movies: state
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      handleClick: (e) => dispatch(handleClickFromActions(e))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
