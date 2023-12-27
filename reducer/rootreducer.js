import { combineReducers } from "redux";
import { loginReducer } from "./loginreducer";
import { adminReducer } from "./adminreducer";
import { patientReducer } from "./patientreducer";
import {reporterReducer} from "./reporterreducer"


const rootReducer = combineReducers({
  login: loginReducer,
  admin: adminReducer,
  patient: patientReducer,
  reporter: reporterReducer,
});

export default rootReducer;
