// this is not a component
const initState = {
    property_one: 'Prop 1',
    property_two: 'Prop 2',
    text:'this is a simple text'
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case 'CHANGE_PROP_ONE':
            return {...state, property_one:action.payload};
        case 'CHANGE_PROP_TWO': 
            return {...state, property_two:action.payload};
        case 'CHANGE_TEXT': 
            return {...state, text:state.property_two};
        default:
            return {...state}
    }
}