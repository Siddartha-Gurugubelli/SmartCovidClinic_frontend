import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/paper';
import { useNavigate } from 'react-router-dom';
import '../css/patient.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import DoctorImg from '../images/doc.jpg';
import PatientImg from '../images/patient.png';
import Appointment from '../images/appointmentBg.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {getAppointmentByEmailAction} from '../actions/patientAction'

function Patient() {
    const navigate = useNavigate()  ;
    const dispatch=useDispatch();
    const login = useSelector((state) => state.login.login);
    console.log(login.email);
    dispatch(getAppointmentByEmailAction(login.email));
    const patient= useSelector((state)=>state.patient.patient);
    console.log(patient);

    const handleClick = (e)=>{
        navigate("../")
    }
    return (
        <>
        <Toolbar/>
        <AppBar position="relative">
        </AppBar>
        <div >
            <h1 align='center'>Welcome</h1>
            <p align='center'>You shall not be a Patient anymore</p>
        </div>
        <div >
        <Container maxWidth='lg' sx={{ mt: 2, mb: 1 }} >
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={5} md={2} lg={4} >
                <Paper
                  style={{backgroundSize: '75%', backgroundRepeat:'no-repeat', backgroundPosition: 'right', backgroundImage: `url(${PatientImg})` }}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 150,
                  }}
                >
                  <NavLink to={`/patient/viewprofile/${patient.patientId}`} style={{ color:'Black', textDecoration: 'none' }}>
                  <h3>View Profile</h3>
                  </NavLink>
                </Paper>
              </Grid>
              <Grid item xs={5} md={2} lg={4} >
                <Paper
                style={{backgroundSize: '75%', backgroundRepeat:'no-repeat', backgroundPosition:'right', backgroundImage: `url(${PatientImg})` }}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 150,
                  }}
                >
                  <NavLink to={`/patient/updatepatient/${patient.patientId}`} style={{color:'Black', textDecoration: 'none' }}>
                  <h3>Update Profile</h3>
                  </NavLink>
                </Paper>
              </Grid>
              <Grid item xs={5} md={2} lg={4} >
                <Paper
                style={{backgroundSize: '75%', backgroundRepeat:'no-repeat', backgroundPosition:'right', backgroundImage: `url(${Appointment})` }}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 150,
                  }}
                >
                  <NavLink to={`/patient/viewAppointment/${patient.patientId}`} style={{ color:'Black', textDecoration: 'none' }}>
                  <h3>View Appointment</h3>
                  </NavLink>
                </Paper>
              </Grid>
              <Grid item xs={5} md={2} lg={6}>
                <Paper
                style={{ backgroundSize: '75%',backgroundPosition:'right',backgroundRepeat:'no-repeat', backgroundImage: `url(${Appointment})` }}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 150,
                  }}
                >
                  <NavLink to={`/patient/update/${patient.patientId}`} style={{ color:'Black',textDecoration: 'none' }}>
                  <h3>Book Appointment</h3>
                  </NavLink>
                </Paper>
              </Grid>
              <Grid item xs={5} md={2} lg={6}>
                <Paper
                style={{backgroundSize: '75%', backgroundRepeat:'no-repeat', backgroundPosition:'right', backgroundImage: `url(${DoctorImg})` }}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 150,
                  }}
                >
                  <NavLink to="/PDoctors" style={{ color:'Black',textDecoration: 'none' }}>
                  <h2>View Doctors</h2>
                  </NavLink>
                </Paper>
              </Grid>
            </Grid>
        </Container>
        </div>
    </>
    )
}

export default Patient;