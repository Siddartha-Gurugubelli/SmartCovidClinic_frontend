import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAdminByEmailAction } from "../actions/adminActions";
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../App.css';
import { Button, Toolbar } from "@mui/material";
import BackGround from '../images/adminBg.jpg';
import ProfileImg from '../images/profileBg.jpg'
import { useNavigate } from "react-router-dom";

const Profile = () =>{
    const dispatch = useDispatch();
    const login = useSelector((state) => state.login.login);
    dispatch(getAdminByEmailAction(login.email));
    const admin= useSelector((state)=>state.admin.admin);

    let navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate(-1)
    }

    return(
        <div style={{  height: '100vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }}>
            <Toolbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={{textAlign:'center', textDecoration:'underline', color:'#6D0AC4'}}>
            <h2 className='font-loader'>Personal Details</h2></div>
            <div>
            <TableContainer sx={{ px:48 }} >
                <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table" >
                    <TableHead  style={{ backgroundSize: 'cover', backgroundImage: `url(${ProfileImg})` }}>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader' >AdminId: {admin.adminId}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Name: {admin.adminName}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Contact No: {admin.contact}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Email Id: {login.email}</h4></TableRow>
                    </TableHead>
                </Table>
                </TableContainer>
                <div align="center"><Button variant="contained" color="secondary" size="small"
                   onClick={goToPreviousPath} style={{textDecoration:'None'}}
             >
             Go Back</Button></div>
            </div>

        </div>
    )
}

export default Profile;