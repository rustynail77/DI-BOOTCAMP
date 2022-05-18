const initState = {
  fname:'',
  sname:'',
  results: {}
}

export const reducer = (state=initState,action={}) => {
  switch (action.type) {
    case 'FIRST_NAME':
      return {...state, fname:action.payload}
    case 'SECONDE_NAME':
      return {...state, sname:action.payload}
    case 'RESULTS':
     return {...state, results:action.payload}
    default:
      return {...state}
  }
}
