export const insertItem = (data) => {
    return {
        type: 'INSERT',
        payload: data
    }
}

export const updateItem = (data) => {
    return {
        type: 'UPDATE',
        payload: data   
    }
}

export const delItem = (id) => {
    return {
        type: 'DELETE-ITEM',
        payload: id
    }
}

export const updateIndex = (index) => {
    return {
        type: 'UPDATE-INDEX',
        payload: index
    }
}
