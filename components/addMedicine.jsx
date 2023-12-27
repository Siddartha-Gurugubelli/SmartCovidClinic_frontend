import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Toolbar } from "@mui/material";
import BackGround from '../images/adminBg.jpg';


const AddMedicine = () => {
    let navigate = useNavigate();

    const[medicine, setMedicine]=useState({
        ailment:"",
        medicine:"",
    });

    const[medicineErrors, setMedicineErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);    

    const handleChange = (event) =>{
        console.log(event.target.name);
        console.log(event.target.value);

        const newMedicine={ ...medicine };

        newMedicine[event.target.name]=event.target.value;

        setMedicine(newMedicine);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        setMedicineErrors(validate(medicine));
        setIsSubmit(true);

        console.log("handleSubmit");

        const newMedicine={
            ailment:medicine.ailment,
            medicine:medicine.medicine,
        };


        console.log(newMedicine);

        axios.post("http://localhost:8080/medicine/add",newMedicine)
             .then((res) => {
                console.log(res);
                alert("Added new Medicine "+ res.data.medicine +" successfully");
                navigate("/medicine");
             })
             .catch((error)=> console.log(error));
    };

    useEffect(() =>{
        console.log(medicineErrors);
        if(Object.keys(medicineErrors).length===0 && isSubmit){
            console.log(medicine);
        }
    },[medicineErrors])

    const validate = (values) =>{
        const errors ={}
        if(!values.ailment){
            errors.ailment="Ailment is Required!";
        }
        if(!values.medicine){
            errors.medicine="Medicine is Required!";
        }
        return errors;
    };

    return(
        <div style={{ height: '100vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }}>
            <Toolbar/>
            <h2 align="center">Add New Medicine</h2>
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
                        name="ailment"
                        label="Ailment"
                        variant="outlined"
                        value={medicine.ailment}
                        onChange={handleChange}/>
                    <br/>
                    <h4 style={{color: "red"}}>{medicineErrors.ailment}</h4>
                    <TextField
                        style={{ width: "300px", margin: "10px" }}
                        type="text"
                        name="medicine"
                        id="medicine"
                        label="Medicine"
                        value={medicine.medicine}
                        onChange={handleChange}/>
                    <br/>
                    <h4 style={{color: "red"}}>{medicineErrors.medicine}</h4>
                </div>
                <Button type="submit" variant="contained" >Submit</Button>
            </Box>
            </form>
        </div>
    )
}

export default AddMedicine;