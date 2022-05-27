import * as mockAPI from './mockapi';
import debounce from 'lodash/debounce';

// These are our action types
export const SEARCH_REQUEST = "SEARCH_REQUEST"
export const SEARCH_SUCCESS = "SEARCH_SUCCESS"
export const SEARCH_ERROR = "SEARCH_ERROR"


// Now we define actions
export function searchRequest(){
    return {
        type: SEARCH_REQUEST
    }
}

export function searchSuccess(payload){
    return {
        type: SEARCH_SUCCESS,
        payload
    }
}

export function searchError(error){
    return {
        type: SEARCH_ERROR,
        error
    }
}

export function search(query) {
    return async function (dispatch) {
        dispatch(searchRequest());
        try{
            const response = await mockAPI.searchAPI(query);
            dispatch(searchSuccess(response.data));
        }catch(error){
            dispatch(searchError(error));
        }
    }
}

// debouncing the searchAPI method with wait time of 800 miliseconds
// note that we have leading=true, means that initial function call will be fired
// before starting the wait time
// withut it return value is initial null, which will break the search code
const debouncedSearchAPI = debounce(async (query) => {
    return await mockAPI.searchAPI(query)
}, 800, { leading: true });

export function debouncedSearch(query) {
    return async function (dispatch) {
        dispatch(searchRequest());
        try{
            const response = await debouncedSearchAPI(query);
            dispatch(searchSuccess(response.data));
        }catch(error){
            dispatch(searchError(error));
        }
    }
}