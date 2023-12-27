import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Toolbar } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import BackGround from '../images/adminBg.jpg';


const AddDoctor = () => {
    let navigate = useNavigate();

    const[doctor, setDoctor]=useState({
        doctorName:"",
        spec:"",
        doctorAvailable:"",
    });

    const[doctorErrors, setADoctorErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);

    const handleChange = (event) =>{
        console.log(event.target.name);
        console.log(event.target.value);

        const newDoctor={ ...doctor };

        newDoctor[event.target.name]=event.target.value;

        setDoctor(newDoctor);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        setADoctorErrors(validate(doctor));
        setIsSubmit(true);

        console.log("handleSubmit");

        const newDoctor={
            doctorName:doctor.doctorName,
            spec:doctor.spec,
            doctorAvailable:doctor.doctorAvailable,
        };


        console.log(newDoctor);

        axios.post("http://localhost:8080/admin/addDoctor",newDoctor)
             .then((res) => {
                console.log(res);
                alert("Added new Doctor "+ res.data.doctorName +" successfully");
                navigate("/doctor");
             })
             .catch((error)=> console.log(error));
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

    return(
        <div style={{ height: '100vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }}>
            <Toolbar/>
            <h2 align="center">Add New Doctor</h2>
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
                        name="doctorName"
                        label="Doctor Name"
                        variant="outlined"
                        value={doctor.doctorName}
                        onChange={handleChange}/>
                    <br/>
                    <h4 style={{color: "red"}}>{doctorErrors.doctorName}</h4>
                    <h4>Specialization</h4>
                    <Select
                            
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
                            name="availability"
                            value={doctor.availability}
                            label="Availability"
                            onChange={handleChange}
                            style={{ width: "250px", margin: "10px" }}
                        >
                            <MenuItem value={true}>Available</MenuItem>
                            <MenuItem value={false}>Unavailable</MenuItem>
                        </Select>
                </div>
                <Button type="submit" variant="contained" >Submit</Button>
            </Box>
            </form>
        </div>
    )
}

export default AddDoctor;