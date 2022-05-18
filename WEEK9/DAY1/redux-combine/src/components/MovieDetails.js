import {connect} from 'react-redux';
const MovieDetails = (props) => {
  return (
    <>
      <h2>Movie Details</h2>
      <p>Title: {props.movie.title}</p>
      <p>releaseDate: {props.movie.releaseDate}</p>
      <p>rating: {props.movie.rating}</p>
    </>
  )
}
const mapStateToProps = (state) => {
  return{
    movie: state.selectedMovieReducer.movie
  }
}
export default connect(mapStateToProps)(MovieDetails)
