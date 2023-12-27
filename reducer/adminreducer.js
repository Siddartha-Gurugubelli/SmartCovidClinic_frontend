const initialState = {
    admins: [],
    admin: {},
  };
  
  export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ADMINS":
        return { ...state, admins: action.payload };
      case "GET_ADMIN_BY_ID":
        return { ...state, admin: action.payload };
      case "ADD_ADMIN":
        return { ...state, admins: [...state.admins, action.payload] };
      case "DELETE_ADMIN":
        const admins = state.admins.filter(
          (e) => e.id !== action.payload.id
        );
        return { ...state, admins: admins };
      case "UPDATE_ADMIN":
        return state.admins.map((p) =>
          p.id === action.payload.id ? action.payload : p
        );
      default:
        return state;
    }
  };
  