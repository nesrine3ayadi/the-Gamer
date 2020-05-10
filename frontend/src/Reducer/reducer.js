const initialState = {
    users: []
}
export default function (state = initialState, action){
    switch (action.type){
        case 'ADD_USER':
            return{
                users:[...state.users, action.payload]
            }
        case "DISPLAY_USER" : 
             return {users:action.payload}
        default :return state
    }
}