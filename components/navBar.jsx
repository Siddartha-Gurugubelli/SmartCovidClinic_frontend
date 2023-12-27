// imrc - imports both React and Component from react module
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar } from "@mui/material";

const NavBar = () => {
  const login = useSelector((state) => state.login.login);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar>
      <div>
       {/* <NavLink >
          MyApp
        </NavLink> */}
        <div >
            {login.isloggedIn ? (
                //<NavLink to="/logout" className="nav-link">
                  <h5>Logout</h5>
                //</NavLink>

            ) : (
                //<NavLink to="/login" className="nav-link">
                  <h5>Login</h5>
                //</NavLink>
            )}
            {login.isloggedIn ? (
                //<NavLink to="/profile" className="nav-link">
                <h5> Profile</h5>
                //</NavLink>
            ):(
              //<NavLink to="/register" className="nav-link">
              <h5> Register</h5>
             //</NavLink>
            )}
        </div>
      </div>
      </Toolbar>
      </AppBar>
      </Box>
  );
};

export default NavBar;
