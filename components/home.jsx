import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BackGround from '../images/cloud1.jpeg';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import { color } from '@mui/system';
import { Table } from '@mui/material';





function PricingContent() {
  return (
    <>
    <Toolbar/>
    <div style={{ height: '100vh', backgroundSize: '100%',  backgroundRepeat:'no-repeat',backgroundImage: `url(${BackGround})` }}>

       
        {/* <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >

        </AppBar> */}
        {/* Hero unit */}
        <div align="center">
          <br></br>
            <Box sx={{ flexGrow: 1 }}>
                <Grid item xs={10}>
                  <Typography
                    component="h4"
                    variant="h4"
                    color="text.primary"
                    gutterBottom
                    
                  >
                    Welcome
                  </Typography>
                  <Typography variant="h4" align="center" color="blue" component="p">
                   <b> SMART COVID CLINIC </b>
                  </Typography>

                <Grid item xs={2}>
                 
                </Grid>

              </Grid>
            </Box>

            </div>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Typography
            component="h4"
            variant="h5"
            align="left"
            color="Black"
            gutterBottom
          >
            <u>Our Services</u>
          </Typography>
          <Typography variant="inherit" align="left" color="Black" component="p">
            <b>COVID clinic provides a no-cost-to-patient diagnostic COVID-19 PCR test for eligible insured, uninsured, and undocumented patients.This service is used to detect COVID-19 antibodies. A positive antibody test result suggests the patient was recently infected by COVID-19 or has developed an immune response through vaccination.</b>
          </Typography><br/><br/>
          <Typography
            component="h4"
            variant="h5"
            align="left"
            color="Black"
            gutterBottom
          >
           <u> Our Mission</u>
          </Typography>
          <Typography  variant="inherit" align="left" color="Black" component="p">
         <b> Covid Clinic’s mission is to provide full service COVID-19 care to community members nationwide, with safe and convenient locations. Our goal is to heal our nation with caring, cost-effective and accessible solutions to prevent the spread of COVID-19.</b>
          </Typography>

        </Container>
        <br/>
        <br/>
        {/* Footer */}
        <table style={{"marginLeft":'25rem'}}>
          <tr>
            <td style={{"padding":'20px'}}><Button variant="contained" color="primary">
                    <NavLink to= "/aboutus"
                      style={{color:'white', textDecoration:"none"}}
                    >
                      About Us
                    </NavLink>
                  </Button></td>
            <td style={{"padding":'20px'}}>
              <Button variant="contained">
                    <NavLink to="/viewdoctors"
                      style={{ color:'white', textDecoration:'None'}}
                    >
                      View Doctors
                    </NavLink></Button></td>
            <td style={{"padding":'20px'}}><Button variant="contained">
                    <NavLink to="/contactus"
                    style={{ color:'white', textDecoration:'None'}}
                    >
                      Contact Us
                    </NavLink>
                  </Button> </td>
          </tr>

          </table>

        {/* End footer */}

    </div>
    </>
  );
}

export default function Pricing() {
  return <PricingContent />;
}


