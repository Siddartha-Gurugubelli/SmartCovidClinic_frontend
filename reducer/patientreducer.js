const initialState = {
    patients: [],
    patient: {},
  };
  
  export const patientReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PATIENTS":
        return { ...state, patients: action.payload };
      case "GET_APPOINTMENT_BY_ID":
        return { ...state, patient: action.payload };
      case "GET_APPOINTMENT_BY_EMAIL":
        return { ...state, patient: action.payload };
      case "ADD_PATIENT":
        return { ...state, patients: [...state.patients, action.payload] };
      case "DELETE_PATIENT":
        const patients = state.patients.filter(
          (e) => e.id !== action.payload.id
        );
        return { ...state, patients: patients };
      case "UPDATE_PATIENT":
        return state.patients.map((p) =>
          p.id === action.payload.id ? action.payload : p
        );
      default:
        return state;
    }
  };