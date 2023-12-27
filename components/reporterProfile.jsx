import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReporterByEmailAction } from "../actions/reporterAction";
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../App.css';
import { Toolbar } from "@mui/material";
import BackGround from '../images/adminBg.jpg';
import ProfileImg from '../images/profileBg.jpg'

const ReporterProfile = () =>{
    const dispatch=useDispatch();
    const login = useSelector((state) => state.login.login);
    console.log(login.email);
    dispatch(getReporterByEmailAction(login.email));
    const reporter= useSelector((state)=>state.reporter.reporter);


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
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader' >Reporter Id: {reporter.reporterId}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Name: {reporter.reporterName}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Contact No: {reporter.reporterContact}</h4></TableRow>
                        <br/>
                        <TableRow style={{textAlign:'center'}}><h4 className='font-loader'>Email Id: {login.email}</h4></TableRow>
                    </TableHead>
                </Table>
                </TableContainer>
            </div>

        </div>
    )
}

export default ReporterProfile;