import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Toolbar } from "@mui/material";
import BackGround from '../images/adminBg.jpg';

const AddAdmin = () => {
    let navigate = useNavigate();

    const[admin, setAdmin]=useState({
        name:"",
        contact:"",
        email:"",
        password:"",
        role:"Admin",
    });

    const[adminErrors, setAdminErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);


    const handleChange = (event) =>{
        console.log(event.target.name);
        console.log(event.target.value);

        const newAdmin={ ...admin };

        newAdmin[event.target.name]=event.target.value;

        setAdmin(newAdmin);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        setAdminErrors(validate(admin));
        
        if(Object.keys(adminErrors).length) return;
        

        console.log("handleSubmit");

        const newAdmin={
            adminName:admin.name,
            contact:admin.contact,
            loginDto: {
                loginEmail:admin.email,
                loginPassword:admin.password,
                role:admin.role,
            },

        };  


        console.log(newAdmin);
        axios.post("http://localhost:8080/admin/add",newAdmin)
             .then((res) => {
                console.log(res);
                alert("Added new Admin "+ res.data.adminName +" successfully");
                navigate("/admin");
             })
             .catch((error)=> console.log(error));
    };

    useEffect(() =>{
       
        if(Object.keys(adminErrors).length===0 && isSubmit){
            console.log(admin);
        }
    },[adminErrors])

    const validate = (values) =>{
        const errors ={}
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const stringRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})") ; 
        if(!values.name){
            errors.name="Name is Required!";
            setIsSubmit(true);
        }
        if(!values.contact){
            errors.contact="Contact is Required!";
            setIsSubmit(true);
        }else if(values.contact.length !== 10 ){
            errors.contact="Contact is not Valid";
            setIsSubmit(true);
        }
        if(!values.email){
            errors.email="Email is Required!";
        }else if(!regex.test(values.email)){
            errors.email="Please enter a Valid Email!";
            setIsSubmit(true);
        }
        if(!values.password){
            errors.password="Password is Required!";
            setIsSubmit(true);
        }else if(!stringRegex.test(values.password)){
            errors.password="Password must contain- 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character, 1 special character and must contain atleast 6 characters";
            setIsSubmit(true);
        }
        return errors;
    };

    return(
        <div style={{ height: '100vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }}>
            <Toolbar/>
            <div >
            <h2 align="center">Add New Admin</h2>
            <form onSubmit={handleSubmit}>
            <Box
                
                align="center"
                noValidate
                autoComplete="off">
                <div>
                    <TextField
                        
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="name"
                        label="Admin Name"
                        variant="outlined"
                        value={admin.name}
                        onChange={handleChange}/>
                     <br/>
                    <h7 style={{color: "red"}}>{adminErrors.name}</h7>
                    <br/>
                    <TextField
                        
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="contact"
                        id="contact"
                        label="Contact"
                        value={admin.contact}
                        onChange={handleChange}/>
                    <br/>
                    <h7 style={{color: "red"}}>{adminErrors.contact}</h7>
                    <br/>
                    <TextField
                        
                        style={{ width: "300px", margin: "10px" }}
                        id="email"
                        name="email"
                        label="Email"
                        value={admin.email}
                        onChange={handleChange}/>
                    <br/>
                    <h7 style={{color: "red"}}>{adminErrors.email}</h7>
                    <br/>
                    <TextField
                        
                        style={{ width: "300px", margin: "10px" }}
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={admin.password}
                        onChange={handleChange}/>
                    <br/>
                    <h7 style={{color: "red"}}>{adminErrors.password}</h7>
                    <br/>
                    <TextField
                        disabled
                        style={{ width: "300px", margin: "10px" }}
                        id="role"
                        name="role"
                        label="Role"
                        value={admin.role}
                        onChange={handleChange}/>
                    <br/>
                    
                </div>
                <Button type="submit" variant="contained" >Submit</Button>
            </Box>
            </form>
            </div>
        </div>
    )
}

export default AddAdmin;