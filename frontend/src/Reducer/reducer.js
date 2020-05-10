const initialState = {
  users: [],
  connectedUser: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        users: [...state.users, action.payload],
      };
    case "DISPLAY_USER":
      return { ...state,users: action.payload };

    case "CONNECTED_USER":
      return { ...state,connectedUser: action.payload };
    default:
      return state;
  }
}
