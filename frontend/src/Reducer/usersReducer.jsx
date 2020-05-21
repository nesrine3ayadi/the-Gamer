const initialState ={
users:[],
displayStream: false
}

export default function (state = initialState, action) {
    switch (action.type) {
      case "DISPLAY_USER":
        return { ...state, users: action.payload };

        case "DISPLAY_STREAM":
          return { ...state, displayStream: !state.displayStream };


      default:return state
    }
}