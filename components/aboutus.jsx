import { TableContainer, Toolbar } from "@mui/material";
import React, { Component } from "react";
import BackGround from '../images/cloude.jpg';
import Profile from '../images/profileBg.jpg'
import AboutUs from '../images/aboutUs.jpeg';


class Home extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
      <Toolbar/>
      <div align="center" style={{  height: '100vh', backgroundSize: '100%', backgroundRepeat:'no-repeat',backgroundImage: `url(${AboutUs})` }}>
        <br/>
        <TableContainer sx={{ px:40 }}>
        <u><h1>Description</h1></u>
        <b><p>Our mission is to provide full service COVID-19 care to community members nationwide, with safe and convenient locations. Our goal is to heal our nation with caring, cost-effective and accessible solutions to prevent the spread of COVID-19.</p></b>
        </TableContainer>
        <br/>
        <h1>This is our Team</h1>
        <TableContainer sx={{ px:48 }}>
        <b><p  >GOKEDA PRAVALLIKA <br/>
                YASHASWINI EAGALA<br/>
                SIDDARTHA GURUGUBELLI<br/>
                PYDIMALLA HADASSA<br/>
                HARSHVARDHAN<br/>
                SHAIK PARVEZ ALI<br/>
                PILLA VENKATA PAVAN<br/>
        </p></b>
        </TableContainer>
      </div>
      </>
    );
   
  }
}

export default Home;

