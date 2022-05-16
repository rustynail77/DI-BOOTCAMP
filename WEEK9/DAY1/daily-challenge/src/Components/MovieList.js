import {connect} from 'react-redux';
import {selectedMovie} from '../redux/actions';

const MovieList = (props) => {
    return (
        <>
            <h2>Movie List:</h2>
            {
            props.films.map((item, i)=>{
                return (
                <div key={i}>
                    <span>{item.title} </span>
                    <button onClick={()=>props.movieDetails(item)}>Details</button> {/*insted of the "item" we could have have sent i, which is the index of the item. in the case we need to change our payload in the reducers.js file*/}
                </div>
                )
                })
            }                              
        </>
    )
}

const mapStateToProps = (state)=>{
    return {
        films: state.movies
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      movieDetails: (movie) => dispatch(selectedMovie(movie))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);