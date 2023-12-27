import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Toolbar } from "@mui/material";
import BackGround from '../images/adminBg.jpg';


const AddReporter = () => {
    let navigate = useNavigate();

    const[reporter, setReporter]=useState({
        reporterName:"",
        reporterContact:"",
        loginEmail:"",
        loginPassword:"",
        role:"",
    });

    const[reporterErrors, setReporterErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);

    const handleChange = (event) =>{
        console.log(event.target.name);
        console.log(event.target.value);

        const newReporter={ ...reporter };

        newReporter[event.target.name]=event.target.value;

        setReporter(newReporter);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        setReporterErrors(validate(reporter));
        setIsSubmit(true);

        console.log("handleSubmit");

        const newReporter={
            reporterName:reporter.reporterName,
            reporterContact:reporter.reporterContact,
            login: {
                loginEmail:reporter.loginEmail,
                loginPassword:reporter.loginPassword,
                role:reporter.role,
            },

        };


        console.log(newReporter);

        axios.post("http://localhost:8080/reporter/add",newReporter)
             .then((res) => {
                console.log(res);
                alert("Added new Reporter "+ res.data.reporterName +" successfully");
                navigate("/reporter");
             })
             .catch((error)=> console.log(error));
    };

    useEffect(() =>{
        console.log(reporterErrors);
        if(Object.keys(reporterErrors).length===0 && isSubmit){
            console.log(reporter);
        }
    },[reporterErrors])

    const validate = (values) =>{
        const errors ={}
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const stringRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})") ; 
        if(!values.reporterName){
            errors.reporterName="Name is Required!";
        }
        if(!values.reporterContact){
            errors.reporterContact="Contact is Required!";
        }else if(values.reporterContact.length !== 10 ){
            errors.reporterContact="Contact is not Valid";
        }
        if(!values.loginEmail){
            errors.loginEmail="Email is Required!";
        }else if(!regex.test(values.loginEmail)){
            errors.loginEmail="Please enter a Valid Email!";
        }
        if(!values.loginPassword){
            errors.loginPassword="Password is Required!";
        }else if(!stringRegex.test(values.loginPassword)){
            errors.loginPassword="Password must contain- 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character, 1 special character and must contain atleast 6 characters";
        }
        return errors;
    };

    return(
        <div style={{  height: '100vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }}>
            <Toolbar/>
            <h2 align="center">Add New Reporter</h2>
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
                        
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="reporterName"
                        label="Reporter Name"
                        variant="outlined"
                        value={reporter.reporterName}
                        onChange={handleChange}/>
                    <br/>
                    <h4 style={{color: "red"}}>{reporterErrors.reporterName}</h4>
                    <TextField
                        
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="reporterContact"
                        id="reporterContact"
                        label="Reporter Contact"
                        value={reporter.reporterContact}
                        onChange={handleChange}/>
                    <br/>
                    <h4 style={{color: "red"}}>{reporterErrors.reporterContact}</h4>
                    <TextField
                        
                        style={{ width: "300px", margin: "10px" }}
                        id="loginEmail"
                        name="loginEmail"
                        label="Email"
                        value={reporter.loginEmail}
                        onChange={handleChange}/>
                    <br/>
                    <h4 style={{color: "red"}}>{reporterErrors.loginEmail}</h4>
                    <TextField
                        
                        style={{ width: "300px", margin: "10px" }}
                        id="loginPassword"
                        name="loginPassword"
                        label="Password"
                        type="password"
                        value={reporter.loginPassword}
                        onChange={handleChange}/>
                    <br/>
                    <h4 style={{color: "red"}}>{reporterErrors.loginPassword}</h4>
                    <TextField
                        disabled
                        style={{ width: "300px", margin: "10px" }}
                        id="role"
                        name="role"
                        label="Role"
                        value={"Reporter"}
                        onChange={handleChange}/>
                    <br/>
                </div>
                <Button type="submit" variant="contained" >Submit</Button>
            </Box>
            </form>
        </div>
    )
}

export default AddReporter;