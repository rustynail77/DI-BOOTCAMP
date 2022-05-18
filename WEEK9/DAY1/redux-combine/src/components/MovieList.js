import {connect} from 'react-redux';
import {selectedMovie} from '../redux/actions'
const MovieList = (props) => {
  return(
    <>
      <h2>Movie List</h2>
      <div>
      {
        props.movies.map((item,i)=>{
          return(
            <div key={i}>
              <p>{item.title}</p>
              <button onClick={()=>props.movieDetails(i)}>Details</button>
            </div>
          )
        })
      }
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer.movies
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    movieDetails: (index) => dispatch(selectedMovie(index))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieList)
