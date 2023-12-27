import { myAxios } from "./helper";

export const signup = (patient) => {
  return myAxios.post("/patient/add",patient).then((response) => response.data);
};
