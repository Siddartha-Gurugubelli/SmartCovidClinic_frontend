import axios from "axios";

// Register Action
export const registerAction = (patient) => async (dispatch) => {
  const result = await axios.post(
    "http://localhost:8080/patient/add",
    patient
  );
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "REGISTER",
    payload: result.data,
  });
};

// Login Action
export const loginAction = (login) => (dispatch) => {
  axios
    .post("http://localhost:8080/login/dto", login)
    .then((res) => {
      console.log(res);
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch({
        type: "ERR_RES",
        payload: error.response.data.message,
      });
    });
};

// logout action
export const logoutAction = (email) => async (dispatch) => {
  const result = await axios.patch(`http://localhost:8080/logout/${email}`);
  console.log(result);
  console.log(result.data);
  dispatch({
    type: "LOGOUT",
    payload: result.data,
  });
};

export const LoginDetailsAction=(email)=>(dispatch)=>{

  axios.get(`http://localhost:8080/login/getEmail/${email}`)
    .then((res)=>{
        console.log(res);
        dispatch({
            type: "GET_LOGIN_BY_EMAIL",
            payload:res.data,
        });
    })
    .catch((error)=>{
        console.log(error.response.data.message);
        dispatch({
            type:"ERR_RES",
            payload:error.response.data.message,
        });
    });


};