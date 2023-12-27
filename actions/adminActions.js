import axios from "axios";

export const getAdminByEmailAction = (email) =>(dispatch) =>{
    axios.get(`http://localhost:8080/admin/getByEmail/${email}`)
    .then((res)=>{
        console.log(res);
        dispatch({
            type: "GET_ADMIN_BY_ID",
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