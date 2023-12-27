import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ElderlyIcon from '@mui/icons-material/Elderly';
import { NavLink } from 'react-router-dom';
import BackGround from '../images/adminBg.jpg';
import DoctorImg from '../images/doc.jpg';
import RepImg from '../images/rep.jpg';
import PatientImg from '../images/patient.png';
import MedImg from '../images/med.jpg';
import AdminImg from '../images/admin.png';


const mdTheme = createTheme();



function AdminDashboard() {
 
  return (
    <div style={{  height: '100vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }}> 
          <Toolbar />
          <div >
          <Container maxWidth='lg' sx={{ mt: 2, mb: 1 }} >
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={5} md={2} lg={4} >
                <Paper
                  style={{ backgroundSize: 'cover', backgroundImage: `url(${DoctorImg})` }}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <NavLink to="/doctor" style={{ color:'DarkBlue', textDecoration: 'none' }}>
                  <LocalHospitalIcon/>
                  <h2>Doctors</h2>
                  </NavLink>
                </Paper>
              </Grid>
              <Grid item xs={5} md={2} lg={4} >
                <Paper
                style={{backgroundSize: '50%', backgroundRepeat:'no-repeat', backgroundPosition:'right', backgroundImage: `url(${RepImg})` }}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <NavLink to="/reporter" style={{color:'DarkBlue', textDecoration: 'none' }}>
                  <RecordVoiceOverIcon />
                  <h2>Reporters</h2>
                  </NavLink>
                </Paper>
              </Grid>
              <Grid item xs={5} md={2} lg={4} >
                <Paper
                style={{backgroundSize: '50%', backgroundRepeat:'no-repeat', backgroundPosition:'right', backgroundImage: `url(${PatientImg})` }}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <NavLink to="/adminPatient" style={{ color:'DarkBlue', textDecoration: 'none' }}>
                  <ElderlyIcon />
                  <h2>Patients</h2>
                  </NavLink>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                style={{ backgroundSize: '65%',backgroundPosition:'right',backgroundRepeat:'no-repeat', backgroundImage: `url(${MedImg})` }}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <NavLink to="/medicine" style={{ color:'DarkBlue',textDecoration: 'none' }}>
                  <VaccinesIcon />
                  <h2>Medicines</h2>
                  </NavLink>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                style={{backgroundSize: '50%', backgroundRepeat:'no-repeat', backgroundPosition:'right', backgroundImage: `url(${AdminImg})` }}
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <NavLink to="/admin" style={{ color:'DarkBlue',textDecoration: 'none' }}>
                  <AdminPanelSettingsIcon />
                  <h2>Admins</h2>
                  </NavLink>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          </div>
    </div>
  );
}

export default AdminDashboard;