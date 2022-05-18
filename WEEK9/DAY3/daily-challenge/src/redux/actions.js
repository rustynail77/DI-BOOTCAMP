export const GET_USERS = 'GET_USERS';
export const SEARCH = 'SEARCH';

export const handleSearch = (value) => {
  return {
    type:SEARCH,
    payload:value
  }
}

export const getUsers = () => (dispatch) => {  
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(response=> {
            dispatch({type:GET_USERS,payload: response});
        })       
        .catch(err => console.error(err));
  }