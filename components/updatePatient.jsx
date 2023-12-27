import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Toolbar } from "@mui/material";
import BackGround from '../images/patientBg.jpg';


const UpdatePatient = () => {
  const params = useParams();
  let navigate = useNavigate();
  console.log(params);

  const[patient, setPatient]=useState({
    patientId:"",
    patientName:"",
    contact:"",
    id:"",
    loginEmail:"",
    loginPassword:"",
    role:"",
    loggedIn:"",
    ailment1:"",
    ailment2:"",
    ailment3:"",
    membership:"",
    appointmentDate:"",
    timeSlot1:"",
    doctor:""

});


    useEffect(() => {
    axios.get(`http://localhost:8080/patient/getFull/${params.id}`)
      .then((res) =>  { 
        const patient={
        patientId:res.data.patientId,
        patientName:res.data.patientName,
        contact:res.data.contact,
        id:res.data.login.id,
        loginEmail:res.data.login.loginEmail,
        loginPassword:res.data.login.loginPassword,
        role:res.data.login.role,
        loggedIn:res.data.login.loggedIn,
        ailment1:res.data.ailment1,
        ailment2:res.data.ailment2,
        ailment3:res.data.ailment3,
        membership:res.data.membership,
        appointmentDate:res.data.appointmentDate,
        timeSlot1:res.data.timeSlot1,
        doctor:res.data.doctor
      }
      setPatient(patient)})
      .catch((err) => console.log(err));
  },[]);

const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value
    
    const newPatient = { ...patient };
  

    newPatient[event.target.name] = event.target.value;
  
    setPatient(newPatient);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      const newPatient={
            patientId:patient.patientId,
            patientName:patient.patientName,
            contact:patient.contact,
            login: {
                 id:patient.id,
                 loginEmail:patient.loginEmail,
                 loginPassword:patient.loginPassword,
                 role:patient.role,
                 loggedIn:patient.loggedIn,
            },
            ailment1:patient.ailment1,
            ailment2:patient.ailment2,
            ailment3:patient.ailment3,
            membership:patient.membership,
            appointmentDate:patient.appointmentDate,
            timeSlot1:patient.timeSlot1,
            doctor:patient.doctor
        };
        console.log(newPatient);
    axios
      .put(`http://localhost:8080/patient/update/${params.id}`, newPatient)
      .then((res) => {
        console.log(res);
        alert("Updated patient " + res.data.patientName + " successfully!");
        navigate("../patient");
      })
      .catch((error) => console.log(error));
  };
  return (
      <div style={{ height: '100vh', backgroundSize: '100%', backgroundImage: `url(${BackGround})` }}>
      <Toolbar/>
            <h2 align="center">Update Patient</h2>
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
                        name="patientId"
                        label="Patient Id"
                        variant="outlined"
                        value={patient.patientId}
                        onChange={handleChange}/>
                    <br/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="patientName"
                        label="Patient Name"
                        variant="outlined"
                        value={patient.patientName}
                        onChange={handleChange}/>
                    <br/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        type="telephone"
                        name="contact"
                        id="contact"
                        label="Contact"
                        value={patient.contact}
                        onChange={handleChange}/>
                    <br/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        id="loginEmail"
                        name="loginEmail"
                        label="Email"
                        value={patient.loginEmail}
                        onChange={handleChange}/>
                    <br/>
                </div>
                <Button type="submit" variant="contained" >Update</Button>
            </Box>
        </form>
      </div>
  );
};

export default UpdatePatient;