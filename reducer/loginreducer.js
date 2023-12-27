const initialState = {
    patient: {},
    login: {},
    errMsg: "",
  };
  
  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER":
        return { ...state, patient: action.payload };
      case "LOGIN":
        return { ...state, login: action.payload };
      case "GET_LOGIN_BY_EMAIL":
        return { ...state, login: action.payload };
      case "ERR_RES":
        return { ...state, errMsg: action.payload };
      case "LOGOUT":
        return { ...state, login: action.payload };
      default:
        return state;
    }
  };
  