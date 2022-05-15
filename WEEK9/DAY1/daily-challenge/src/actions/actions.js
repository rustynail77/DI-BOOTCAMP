export const handleClickFromActions = (value) => {
    console.log(value.target.parentNode.id);
    return {
        type:'MOVIE_SELECTED',
        payload: movie
    }
}

