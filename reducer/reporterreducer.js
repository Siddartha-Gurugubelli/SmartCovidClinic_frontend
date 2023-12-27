const initialState = {
    reporters: [],
    reporter: {},
  };
  
  export const reporterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_REPORTER":
        return { ...state, reporters: action.payload };
      case "GET_REPORTER_BY_EMAIL":
        return { ...state, reporter: action.payload };
      case "ADD_REPORTER":
        return { ...state, reporter: [...state.reporter, action.payload] };
      case "DELETE_REPORTER":
        const reporters = state.reporters.filter(
          (e) => e.id !== action.payload.id
        );
        return { ...state, reporters: reporters };
      
      default:
        return state;
    }
  };
  