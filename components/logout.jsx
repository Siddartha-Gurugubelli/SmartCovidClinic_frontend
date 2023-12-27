import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logoutAction, } from "../actions/loginActions";
import { useDispatch, useSelector } from "react-redux";
import { Toolbar } from "@mui/material";
import BackGround from "../images/adminBg.jpg"

const Logout = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.login);
  console.log(login.email);
  useEffect(() => {
    dispatch(logoutAction(login.email));
  }, []);
  return (
    <div style={{  height: '100vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }}>
      <Toolbar/>
      <br/>
      <br/>
      <h1 align="center">
        Logged out successfully!<br/> click <Link to="/login">here</Link> to login
      </h1>
    </div>
  );
};

export default Logout;
