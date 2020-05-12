const initialState = {
  users: [],
  currentUser: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "DISPLAY_USER":
      return { ...state,users: action.payload };
    case "DISPLAY_CURRENT_USER" : 
       return {...state,currentUser:action.payload}
    default:
      return state;
  }
}
