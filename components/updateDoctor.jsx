import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Toolbar } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import BackGround from '../images/adminBg.jpg';


const UpdateDoctor = () => {
  const params = useParams();
  let navigate = useNavigate();
  console.log(params);

  // define state
  const[doctor, setDoctor]=useState({
    doctorId:"",
    doctorName:"",
    spec:"",
    doctorAvailable:"",
});

  const[doctorErrors, setADoctorErrors]=useState({});
  const[isSubmit,setIsSubmit]=useState(false);

  
  useEffect(() => {
    axios.get(`http://localhost:8080/admin/getDoctorById/${params.id}`)
      .then((res) => setDoctor(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    const newDoctor = { ...doctor };
  

    newDoctor[event.target.name] = event.target.value;
    // newLogin[event.target.name] = event.target.value;
  
    setDoctor(newDoctor);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send put request to update

    setADoctorErrors(validate(doctor));
    setIsSubmit(true);

    console.log("handleSubmit");

        const newDoctor={
            doctorId:doctor.doctorId,
            doctorName:doctor.doctorName,
            spec:doctor.spec,
            doctorAvailable:doctor.doctorAvailable,

        };
        console.log(newDoctor);

    axios
      .put(`http://localhost:8080/admin/updateDoctor/${params.id}`, doctor)
      .then((res) => {
        console.log(res);
        // alert user with msg
        alert("Updated Doctor " + res.data.doctorName + " successfully!");
        // redirect to employees page
        navigate("/doctor");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() =>{
    console.log(doctorErrors);
    if(Object.keys(doctorErrors).length===0 && isSubmit){
        console.log(doctor);
    }
  },[doctorErrors])
  

    const validate = (values) =>{
       const errors ={}
        if(!values.doctorName){
            errors.doctorName="Name is Required!";
        }
        if(!values.spec){
            errors.spec="Specialization is Required!";
        }
        return errors;
    };


  return (
    <div style={{ height: '100vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }}>
      <Toolbar/>
            <h2 align="center">Update Doctor</h2>
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
                        name="doctorId"
                        label="Doctor Id"
                        variant="outlined"
                        value={doctor.doctorId}
                        onChange={handleChange}/>
                    <br/>
                    <TextField
                        required
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="doctorName"
                        label="Doctor Name"
                        variant="outlined"
                        value={doctor.doctorName}
                        onChange={handleChange}/>
                    <br/>
                    <h4 style={{color: "red"}}>{doctorErrors.doctorName}</h4>
                    <h4>Specialization</h4>
                    <Select
                            required
                            id="spec"
                            name="spec"
                            value={doctor.spec}
                            label="Specialization"
                            onChange={handleChange}
                            style={{ width: "250px", margin: "10px" }}
                        >
                            <MenuItem value={"Pulmonologists"}>Pulmonologists</MenuItem>
                            <MenuItem value={"Allergists"}>Allergists</MenuItem>
                            <MenuItem value={"Cardiologists"}>Cardiologists</MenuItem>
                            <MenuItem value={"Critical_Care_Medicine_Specialists"}>Critical_Care_Medicine_Specialists</MenuItem>
                            <MenuItem value={"Dermatologists"}>Dermatologists</MenuItem>
                            <MenuItem value={"Endocrinologists"}>Endocrinologists</MenuItem>
                            <MenuItem value={"Emergency_Medicine_Specialists"}>Emergency_Medicine_Specialists</MenuItem>
                            <MenuItem value={"Family_Physicians"}>Family_Physicians</MenuItem>
                            <MenuItem value={"PatieGastroenterologistsnt"}>Gastroenterologists</MenuItem>
                            <MenuItem value={"Geriatric_Medicine_Specialists"}>Geriatric_Medicine_Specialists</MenuItem>
                            <MenuItem value={"Hematologists"}>Hematologists</MenuItem>
                            <MenuItem value={"EndocInfectious_Disease_Specialistsrinologists"}>EnInfectious_Disease_Specialistsdocrinologists</MenuItem>
                            <MenuItem value={"Neurologists"}>Neurologists</MenuItem>
                            <MenuItem value={"Gynecologists"}>Gynecologists</MenuItem>
                            <MenuItem value={"Ophthalmologists"}>Ophthalmologists</MenuItem>
                            <MenuItem value={"Pediatricians"}>Pediatricians</MenuItem>
                        </Select>
                        <h4 style={{color: "red"}}>{doctorErrors.spec}</h4>
                        <br/>
                        <h4>Availability</h4>
                    <Select
                            required
                            id="availability"
                            name="doctorAvailable"
                            value={doctor.doctorAvailable}
                            label="Availability"
                            onChange={handleChange}
                            style={{ width: "250px", margin: "10px" }}
                        >
                            <MenuItem value={true}>Available</MenuItem>
                            <MenuItem value={false}>Unavailable</MenuItem>
                        </Select>
                    <br/>
                </div>
                <Button type="submit" variant="contained" >Submit</Button>
            </Box>
            </form>
    </div>
  );
};

export default UpdateDoctor;
