import {connect} from 'react-redux';

const MovieDetails = (props) => {
    return (
        <>
        <h2>Movie Details</h2>
        <p>Title: {props.movie.title}</p>
        <p>Release date: {props.movie.releaseDate}</p>
        <p>Rating: {props.movie.rating}</p>
    </>
    )   
    
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie
    }
}

export default connect(mapStateToProps)(MovieDetails);