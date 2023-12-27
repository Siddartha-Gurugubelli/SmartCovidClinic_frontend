import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAppointmentByEmailAction } from "../actions/patientAction";
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../App.css';
import { Toolbar } from "@mui/material";
import BackGround from '../images/adminBg.jpg';

const ViewAppointment = () =>{
    const dispatch=useDispatch();
    const login = useSelector((state) => state.login.login);
    console.log(login.email);
    dispatch(getAppointmentByEmailAction(login.email));
    const patient= useSelector((state)=>state.patient.patient);


    return(
        <div style={{  height: '100vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }}>
            <Toolbar/>
            <br/>
            <br/>
            <div style={{textAlign:'center'}}>
            <h1 className='font-loader'>Appointment Details</h1></div>
            <br/>
            <div>
            <TableContainer sx={{ px:40 }} >
                <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table" >
                    <TableHead  style={{ backgroundSize: 'cover', backgroundColor: "skyblue" }}>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader' >PatientId: {patient.patientId}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader' >Patient Name: {patient.patientName}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Email Id: {login.email}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Ailment1: {patient.ailment1}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Ailment2: {patient.ailment2}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Ailment3: {patient.ailment3}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Appointment Date: {patient.appointmentDate}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Time Slot: {patient.timeSlot1}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Doctor: {patient.doctor}</h4></TableRow>
                    </TableHead>
                </Table>
                </TableContainer>
            </div>

        </div>
    )
}

export default ViewAppointment;