import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const mdTheme = createTheme();

const AdminNav=()=> {

  const login = useSelector((state) => state.login.login);
  console.log(login);

  
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
          >
            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <NavLink to="/" style={{ color:'white',textDecoration: 'none' }}><b>
              Smart Covid Clinic</b>
              </NavLink>
            {login.role==="Admin"?(<NavLink to="/adminDashboard" style={{ color:'DarkBlue',textDecoration: 'none' }}><b> | Admin Dashboard</b></NavLink>):(<></>)}
            {login.role==="Patient"?(<NavLink to="/patient" style={{ color:'DarkBlue',textDecoration: 'none' }}><b> | Patient Dashboard</b></NavLink>):
            (<></>)}
            {login.role==="Reporter"?(<NavLink to="/reporter" style={{ color:'DarkBlue',textDecoration: 'none' }}><b> | Reporter Dashboard</b></NavLink>):
            (<></>)}
             </Typography>
            {login.loggedIn?(<div style={{"padding":'10px'}}><Button variant="contained"><NavLink to="/logout" style={{ color:'white', textDecoration:'None'}}>Logout</NavLink></Button></div>):
            ( <div style={{"padding":'10px'}}><Button variant="contained"><NavLink to="/login" style={{ color:'white', textDecoration:'None'}}>Login</NavLink></Button></div>)}
            {login.loggedIn?(<div style={{"padding":'10px'}}><Button><NavLink to="/profile" style={{ color:'white', textDecoration:'None'}}>
              <AccountCircleIcon fontSize='large'/></NavLink>
            </Button></div>):
                  (<div style={{"padding":'10px'}}><Button variant="contained" style={{color:'white' }} >
                    <NavLink to="/signup" style={{ color:'white', textDecoration:'None'}}>
                  Register</NavLink></Button></div>)}
                  </Toolbar>
                </AppBar>
              </Box>
            </ThemeProvider>
  );
}

export default AdminNav;