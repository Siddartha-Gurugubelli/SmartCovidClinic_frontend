import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Toolbar } from "@mui/material";
import BackGround from '../images/adminBg.jpg';


const UpdateAdmin = () => {
  const params = useParams();
  let navigate = useNavigate();
  console.log(params);

  // define state
  const[admin, setAdmin]=useState({
    adminId:"",
    adminName:"",
    contact:"",
    id:"",
    loginEmail:"",
    loginPassword:"",
    role:"",
    loggedIn:"",
});


  
  useEffect(() => {
    axios.get(`http://localhost:8080/admin/findfullById/${params.id}`)
      .then((res) => 
     { const admin={
        adminId:res.data.adminId,
        adminName:res.data.adminName,
        contact:res.data.contact,
        id:res.data.login.id,
        loginEmail:res.data.login.loginEmail,
        loginPassword:res.data.login.loginPassword,
        role:res.data.login.role,
        loggedIn:res.data.login.loggedIn,
      }
      setAdmin(admin)})
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value
    
    const newAdmin = { ...admin };
  

    newAdmin[event.target.name] = event.target.value;
  
    setAdmin(newAdmin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send put request to update
    console.log("handleSubmit");

        const newAdmin={
            adminId:admin.adminId,
            adminName:admin.adminName,
            contact:admin.contact,
            login: {
                id:admin.id,
                loginEmail:admin.loginEmail,
                loginPassword:admin.loginPassword,
            },

        };

        console.log(newAdmin);

    axios
      .put(`http://localhost:8080/admin/update/${params.id}`, newAdmin)
      .then((res) => {
        console.log(res);
        // alert user with msg
        alert("Updated Administrator " + res.data.adminName + " successfully!");
        // redirect to employees page
        navigate("/admin");
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <div style={{ height: '100vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }}>
      <Toolbar/>
            <h2 align="center">Update Admin</h2>
            <form className="border p-3" onSubmit={handleSubmit}>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                align="center"
                noValidate
                autoComplete="off">
                <div>
                <TextField
                        disabled
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="adminId"
                        label="Admin Id"
                        variant="outlined"
                        value={admin.adminId}
                        onChange={handleChange}/>
                    <br/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="adminName"
                        label="Admin Name"
                        variant="outlined"
                        value={admin.adminName}
                        onChange={handleChange}/>
                    <br/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="contact"
                        id="contact"
                        label="Contact"
                        value={admin.contact}
                        onChange={handleChange}/>
                    <br/>
                    <TextField
                        disabled
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="id"
                        label="Login Id"
                        variant="outlined"
                        value={admin.id}
                        onChange={handleChange}/>
                    <br/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        id="email"
                        name="loginEmail"
                        label="Eamil"
                        value={admin.loginEmail}
                        onChange={handleChange}/>
                    <br/>
                </div>
                <Button type="submit" variant="contained" >Submit</Button>
            </Box>
          </form>
    </div>
  );
};

export default UpdateAdmin;
