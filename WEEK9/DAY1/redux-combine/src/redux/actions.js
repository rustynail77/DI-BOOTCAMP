export const MOVIE_SELECTED  = 'MOVIE_SELECTED';

export const selectedMovie = (movie_index) => {
  //console.log('movie_index',movie_index);
  return {
    type: MOVIE_SELECTED,
    payload: movie_index
  }
}
