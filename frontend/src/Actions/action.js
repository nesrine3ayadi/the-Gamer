
export const displayUser = (payload)=> {
    return {
        type: "DISPLAY_USER",
        payload
    }
}

export const displayCurrentUser = (payload)=> {
    return {
        type: "DISPLAY_CURRENT_USER",
        payload
    }
}
