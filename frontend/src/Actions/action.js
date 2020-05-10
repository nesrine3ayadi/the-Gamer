export const addUser = (payload)=> {
    return {
        type: "ADD_USER",
        payload
    }
}
export const displayUser = (payload)=> {
    return {
        type: "DISPLAY_USER",
        payload
    }
}

export const connectedUser = (payload)=> {
    return {
        type: "CONNECTED_USER",
        payload
    }
}