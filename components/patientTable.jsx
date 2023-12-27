import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import BackGround from '../images/adminBg.jpg';
import { Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const styles = theme => ({
    tableRow: {
     '&&:hover': {
        background: "blue",
      },
     },
  });

function PatientTable(props){

    let navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate(-1)
    }
    

    return(
        <div style={{  height: '100vh', backgroundSize: '100%', backgroundImage: `url(${BackGround})` }}> 
        <div align="center">
        <Toolbar/>
        <br/>
                <h2 align="center">Patient Details</h2>
            <TableContainer  component={Paper} sx={{ px:20 }} style={{ height: '77vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }} >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow sx={{backgroundColor: "#3989D5",}}>
                            <TableCell>Patient Id</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Contact</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Membership</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.patient.map((patient)=> (
                        <TableRow
                        key={patient.patientId}
                        hover
                        className={props.tableRow}
                        sx={{ backgroundColor: "#B1CFEC",'&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{patient.patientId}</TableCell>
                        <TableCell align="left">{patient.patientName}</TableCell>
                        <TableCell align="left">{patient.contact}</TableCell>
                        <TableCell align="left">{patient.login.loginEmail}</TableCell>
                        <TableCell align="left">{patient.memberShip?<h7>Yes</h7>:<h7>No</h7>}</TableCell>
                        <TableCell align="left">
                            <Button onClick={() => props.handleDelete(patient.patientId)} variant="text">
                            <DeleteIcon/>
                            </Button>
                                
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <Button variant="contained" color="secondary" size="small"
                   onClick={goToPreviousPath} style={{textDecoration:'None'}}>
            Go Back
         </Button>
                </TableContainer>
            </div>
        </div>
    )
}

export default PatientTable;