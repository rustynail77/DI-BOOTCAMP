const initState = {
    fname: '',
    sname: '',
    results: {}
  }

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case 'SAVE_FNAME':
            return {...state, fname:action.payload};
        case 'SAVE_SNAME': 
            return {...state, sname:action.payload};
        case 'SAVE_API_DATA':
            return {...state, results:action.payload};
        default:
            return {...state}
    }
}