import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAppointmentByEmailAction } from "../actions/patientAction.js";
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../App.css';
import { Button, Toolbar } from "@mui/material";
import BackGround from '../images/patientBg.jpg';
import ProfileImg from '../images/profileBg.jpg'
import { useNavigate } from "react-router-dom";

const ViewProfile = () =>{
    const dispatch = useDispatch();
    const login = useSelector((state) => state.login.login);
    dispatch(getAppointmentByEmailAction(login.email));
    const patient= useSelector((state)=>state.patient.patient);

    let navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate(-1)
    }

    return(
        <div style={{  height: '100vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }}>
            <Toolbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={{textAlign:'center', textDecoration:'underline', color:'#6D0AC4'}}>
            <h2 className='font-loader'>Profile Details</h2></div>
            <div>
            <TableContainer sx={{ px:48 }} >
                <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table" >
                    <TableHead  style={{ backgroundSize: 'cover', backgroundImage: `url(${ProfileImg})` }}>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader' >PatientId: {patient.patientId}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Name: {patient.patientName}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Contact No: {patient.contact}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Email Id: {login.email}</h4></TableRow>
                    </TableHead>
                </Table>
                </TableContainer>
                <div align="center"><Button variant="contained" color="secondary" size="small"
                   onClick={goToPreviousPath} style={{textDecoration:'None'}}
             >
             Return</Button></div>
            </div>
        </div>
    )
}

export default ViewProfile;