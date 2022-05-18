const initState = {
    currentIndex: '',
    list: []
}

export const reducer = (state=initState, action={}) => {
    
    switch (action.type) {
        case 'INSERT':
            let prevList = [...state.list];
            prevList.push(action.payload);
            return {...state, list:prevList};
        case 'UPDATE':
            let prevList2 = [...state.list];
            prevList2[state.currentIndex] = action.payload;
            return {...state, list:prevList2};
        case 'DELETE-ITEM':
            let prevList1 = [...state.list];
            prevList1.splice(action.payload,1);
            return {...state, list:prevList1};
        case 'UPDATE-INDEX':
            return {...state, currentIndex: action.payload};      
        default:
            return {...state}
    }
}