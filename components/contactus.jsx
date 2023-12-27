import React, { Component } from "react";
import BackGround from '../images/cloude.jpg';
import EmailIcon from '@mui/icons-material/Email';
import Call from "@mui/icons-material/Call";
import Grid from '@mui/material/Grid';
import AboutUs from '../images/aboutUs.jpeg';
import { TableContainer, Toolbar } from "@mui/material";

class Home extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
      <Toolbar/>
      <div align="center" style={{  height: '100vh', backgroundSize: '100%', backgroundImage: `url(${AboutUs})` }}>
        <br/>
        <br/>
        <u><h1>Contact Details</h1></u>

        <table >
          <tr>
            <td style={{"padding":'20px'}}><Call/> +91 8420363660</td>
            <td style={{"padding":'20px'}}><EmailIcon/> pravalika@yahoo.com</td>
          </tr>
          <tr>
            <td style={{"padding": '20px'}}> <Call /> +91 7820493838</td>
            <td style={{"padding": '20px'}}><EmailIcon/> siddarath12hotmail.com </td>
          </tr>
          <tr>
            <td style={{"padding": '20px'}}> <Call/> +91 8747346328</td>
            <td style={{"padding": '20px'}}> <EmailIcon/> pavan10@gmail.com </td>
          </tr>
        </table>
        <br/>
        <TableContainer sx={{ px:40 }}>
        <h2>Note:</h2>
        <p >COVID Clinic is happy to offer COVID-19 related testing services to any business, organization, or event. To inquire, please email with your site address, the dates you would like to begin testing, the estimated number of people to be tested, the type(s) of testing. Please include the business’s name and the primary contact’s phone number and email address in the email subject line.</p>
        </TableContainer>
       
      </div>
      </>
    );
   
  }
}

export default Home;






