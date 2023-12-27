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

const mdTheme = createTheme();



function ReporterDashboard() {
 
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
                  <NavLink to="/doctorStatus" style={{ color:'DarkBlue', textDecoration: 'none' }}>
                  <LocalHospitalIcon />
                  <h2>Update Doctor status</h2>
                  </NavLink>
                </Paper>
              </Grid>
              
            </Grid>
          </Container>
          </div>
    </div>
  );
}

export default ReporterDashboard;