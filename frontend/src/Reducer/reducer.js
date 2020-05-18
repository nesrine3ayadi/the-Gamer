import _ from 'lodash';

const initialState = {
  users: [],
  currentUser: {},
  streams:  {},
  auth :{
    isSignedIn: null,
    userId: null
}
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "DISPLAY_USER":
      return { ...state, users: action.payload };
    case "DISPLAY_CURRENT_USER":
      return { ...state, currentUser: action.payload };
    case "FETCH_STREAMS":
      return { ...state.streams, ..._.mapKeys(action.payload, "id") };

    case "FETCH_STREAM":
      return { ...state.streams, [action.payload.id]: action.payload };

    case "CREATE_STREAM":
      return { ...state.streams, [action.payload.id]: action.payload };

    case "EDIT_STREAM":
      return { ...state.streams, [action.payload.id]: action.payload };

    case" DELETE_STREAM":
      return _.omit(state.streams, action.payload);
      case "SIGN_IN":
        return { ...state,auth:{...state.auth,isSignedIn: true, userId: action.payload} }
    case "SIGN_OUT":
        return { ...state,auth:{...state.auth,isSignedIn: true, userId: action.payload} }
    default:
      return state;
  }
}
