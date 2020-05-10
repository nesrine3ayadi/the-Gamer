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