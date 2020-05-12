const initialState = {
  users: [],
  connectedUser: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "DISPLAY_USER":
      return { ...state,users: action.payload };
    default:
      return state;
  }
}
