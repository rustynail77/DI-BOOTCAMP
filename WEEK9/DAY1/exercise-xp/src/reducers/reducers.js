const initialState = {
    count: 0
}

export const reducer = (state=initialState, action={}) => {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {...state, count:state.count+1};
        case 'DECREASE_COUNT':
            return {...state, count:state.count-1};
        default:
            return {...state}
    }
}