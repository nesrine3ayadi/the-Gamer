const initialState = {
    users: []
}
export default function (state = initialState, action){
    switch (action.type){
        case 'ADD_USER':
            return{
                users:[...state.users, action.payload]
            }
    }
}