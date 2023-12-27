import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import moment from 'moment';
import BackGround from '../images/patientBg.jpg';
import { FormControl, InputLabel, MenuItem, Select, Table, TableContainer, TableHead, Toolbar } from "@mui/material";

const UpdatePatientAppointment = () => {
  const params = useParams();
  let navigate = useNavigate();
  console.log(params);

 // const initialValues = {ailment1:"", ailment2:"", ailment3:"", appointmentDate:"", timeSlot1:"", doctor:"",};
 const [patientErrors, setPatientErrors]=useState({});
 const [isSubmit, setIsSubmit]=useState(false);

  // define state
  const[patient, setPatient]=useState({
    patientId:"",
    ailment1:"",
    ailment2:"",
    ailment3:"",
    appointmentDate:"",
    timeSlot1:"",
    doctor:"",
});

useEffect(() => {
  axios.get(`http://localhost:8080/patient/getFull/${params.id}`)
    .then((res) => setPatient(res.data))
    .catch((err) => console.log(err));
}, []);


  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    const newPatient = { ...patient };
  

    newPatient[event.target.name] = event.target.value;
  
    setPatient(newPatient);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setPatientErrors(validate(patient));
    setIsSubmit(true);
    
    console.log("handleSubmit");

        const newPatient={
            patientId:patient.patientId,
            ailment1:patient.ailment1,
            ailment2:patient.ailment2,
            ailment3:patient.ailment3,
            appointmentDate:patient.appointmentDate,
            timeSlot1:patient.timeSlot1,
            doctor:patient.doctor,

        };

        console.log(newPatient);

    axios
      .put(`http://localhost:8080/patient/update/${params.id}`, patient)
      .then((res) => {
        console.log(res);
        // alert user with msg
        alert("Appointment for Patient " + res.data.patientName + " successfully! booked");
        // redirect to patient page
        navigate("/patient");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log(patientErrors);
    if(Object.keys(patientErrors).length===0 && isSubmit){
      console.log(patient);
    }
  },[patientErrors])

  const validate = (values) => {
    const errors ={}
    if(!values.ailment1){
      errors.ailment1="Ailment is required";
    }
    if(!values.ailment2){
      errors.ailment2="Ailment is required";
    }
    if(!values.ailment3){
      errors.ailment3="Ailment is required";
    }
    if(!values.appointmentDate){
      errors.appointmentDate="Appointment Date is required";
    }
    if(!values.timeSlot1){
      errors.timeSlot1="TimeSlot is required";
    }
    if(!values.doctor){
      errors.doctor="Doctor is required";
    }
    return errors;
  };

  return (
    <>
     <Toolbar/>
    <div style={{ height: '120vh', backgroundSize: '100%', backgroundImage: `url(${BackGround})` }}>
     
      <br/>
            <h2 align="center">Book Appointment</h2>
            <form onSubmit={handleSubmit}>
            <div>
            <TableContainer sx={{ px:48 }} >
            <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table" >
            <TableHead  style={{ backgroundSize: 'cover', backgroundColor: "white" }}>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                align="center"
                noValidate
                autoComplete="off"
                >
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
                    <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                     <InputLabel id="ailment1">Ailment1</InputLabel>
                     <Select
                      labelId="ailment1"
                      id="ailment1"
                      name="ailment1"
                      value={patient.ailment1}
                      label="ailment1"
                      onChange={handleChange}
                     >
                      <MenuItem value="">
                       <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Cold"}>Cold</MenuItem>
                            <MenuItem value={"Cough"}>Cough</MenuItem>
                            <MenuItem value={"Fever"}>Fever</MenuItem>
                            <MenuItem value={"Headache"}>Headache</MenuItem>
                            <MenuItem value={"Sore_Throat"}>Sore_Throat</MenuItem>
                            <MenuItem value={"Diarrhoea"}>Diarrhoea</MenuItem>
                            <MenuItem value={"Anosmia"}>Anosmia</MenuItem>
                            <MenuItem value={"Ageusia"}>Ageusia</MenuItem>
                    </Select>
                    </FormControl>
                    <br/>
                    <h7 style={{color:"red"}}>{patientErrors.ailment1}</h7>
                    <br/>
                    <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                     <InputLabel id="ailment2">Ailment2</InputLabel>
                     <Select
                      labelId="ailment2"
                      id="ailment2"
                      name="ailment2"
                      value={patient.ailment2}
                      label="Ailment2"
                      onChange={handleChange}
                     >
                      <MenuItem value="">
                       <em>None</em>
                      </MenuItem>
                         <MenuItem value={"Cold"}>Cold</MenuItem>
                            <MenuItem value={"Cough"}>Cough</MenuItem>
                            <MenuItem value={"Fever"}>Fever</MenuItem>
                            <MenuItem value={"Headache"}>Headache</MenuItem>
                            <MenuItem value={"Sore_Throat"}>Sore_Throat</MenuItem>
                            <MenuItem value={"Diarrhoea"}>Diarrhoea</MenuItem>
                            <MenuItem value={"Anosmia"}>Anosmia</MenuItem>
                            <MenuItem value={"Ageusia"}>Ageusia</MenuItem>
                    </Select>
                    </FormControl>
                    <br/>
                    <h7 style={{color:"red"}}>{patientErrors.ailment2}</h7>
                    <br/>
                    <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                     <InputLabel id="ailment3">Ailment3</InputLabel>
                     <Select
                      labelId="ailment3"
                      id="ailment3"
                      name="ailment3"
                      value={patient.ailment3}
                      label="Ailment3"
                      onChange={handleChange}
                     >
                      <MenuItem value="">
                       <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Cold"}>Cold</MenuItem>
                            <MenuItem value={"Cough"}>Cough</MenuItem>
                            <MenuItem value={"Fever"}>Fever</MenuItem>
                            <MenuItem value={"Headache"}>Headache</MenuItem>
                            <MenuItem value={"Sore_Throat"}>Sore_Throat</MenuItem>
                            <MenuItem value={"Diarrhoea"}>Diarrhoea</MenuItem>
                            <MenuItem value={"Anosmia"}>Anosmia</MenuItem>
                            <MenuItem value={"Ageusia"}>Ageusia</MenuItem>
                    </Select>
                    </FormControl>
                    <br/>
                    <h7 style={{color:"red"}}>{patientErrors.ailment3}</h7>
                    <br/>
                    <div className="mb-3">
                    <InputLabel id="appointmentDate">Appointment Date</InputLabel>
                    <input
                     required
                     style={{ width: "300px", margin: "10px" }}
                     type="date"
                     className="form-control"
                     id="appointmentDate"
                     value={patient.appointmentDate}
                     name="appointmentDate"
                     onChange={handleChange}
                     min={moment().format("YYYY-MM-DD")}
                    />
                    </div>
                    <h7 style={{color:"red"}}>{patientErrors.appointmentDate}</h7>
                    <br/>
                    <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                     <InputLabel id="timeSlot1">TimeSlot1</InputLabel>
                     <Select
                      id="timeSlot1"
                      name="timeSlot1"
                      value={patient.timeSlot1}
                      label="TimeSlot1"
                      onChange={handleChange}
                     >
                      <MenuItem value="">
                       <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Eight_AM"}>Eight_AM</MenuItem>
                            <MenuItem value={"Nine_AM"}>Nine_AM</MenuItem>
                            <MenuItem value={"Ten_AM"}>Ten_AM</MenuItem>
                            <MenuItem value={"Eleven_AM"}>Eleven_AM</MenuItem>
                            <MenuItem value={"Twelve_PM"}>Twelve_PM</MenuItem>
                            <MenuItem value={"Three_PM"}>Three_PM</MenuItem>
                            <MenuItem value={"Four_PM"}>Four_PM</MenuItem>
                            <MenuItem value={"Five_PM"}>Five_PM</MenuItem>
                    </Select>
                    </FormControl>
                    <br/>
                    <h7 style={{color:"red"}}>{patientErrors.timeSlot1}</h7>
                    <br/>
                    <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                     <InputLabel id="doctor">Doctor*</InputLabel>
                     <Select
                      id="doctor"
                      name="doctor"
                      value={patient.doctor}
                      label="Doctor"
                      onChange={handleChange}
                     >
                      <MenuItem value="">
                       <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Hadassa"}>Hadassa - Pulmonologist</MenuItem>
                            <MenuItem value={"Pravallika"}>Pravallika - Dermatologist</MenuItem>
                            <MenuItem value={"Yashaswini"}>Yashaswini - Family_Physician</MenuItem>
                            <MenuItem value={"Pavan"}>Pavan - Gastroenterologist</MenuItem>
                            <MenuItem value={"Parvez Ali"}>Parvez Ali - Hematologist</MenuItem>
                            <MenuItem value={"Siddhartha"}>Siddhartha - Neurologist</MenuItem>
                            <MenuItem value={"Harshavardhan"}>Harshavardhan - Ophthalmologist</MenuItem>
                    </Select>
                    </FormControl>
                    <br/>
                    <h7 style={{color:"red"}}>{patientErrors.doctor}</h7>
                    <br/>
                </div>
                <Button type="submit" variant="contained" >Submit</Button>
            </Box>
            </TableHead>
            </Table>
            </TableContainer>
            </div>
            </form>
    </div>
    </>
  );
};

export default UpdatePatientAppointment;