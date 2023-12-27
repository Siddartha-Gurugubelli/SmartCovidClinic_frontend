import axios from "axios";

export const getReporterByEmailAction = (email) =>(dispatch) =>{
    axios.get(`http://localhost:8080/reporter/getByEmail/${email}`)
    .then((res)=>{
        console.log(res);
        dispatch({
            type: "GET_REPORTER_BY_EMAIL",
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