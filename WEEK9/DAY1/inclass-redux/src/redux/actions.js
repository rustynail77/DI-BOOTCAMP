// this is not a component
export const handleChangeFromRedux = (value) => {
    return {
        type:'CHANGE_PROP_ONE',
        payload: value
    }
}

export const handleChangeTwo = (value) => {
    return {
        type:'CHANGE_PROP_TWO',
        payload: value
    } 
}

export const handleChangeByClick = () => {
    return {
        type:'CHANGE_TEXT'
    }
}