import {GET_USERS,SEARCH} from './actions';

const initState = {
    users:[],
    searchTxt:''
  }
  
  export const reducer = (state=initState,action={}) => {
    switch (action.type) {
      case GET_USERS:
        return {...state, users:action.payload}
      case SEARCH: 
        return {...state, searchTxt:action.payload}
      default:
        return {...state}
    }
  }
  