import React  from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import BackGround from '../images/patientBg.jpg';
import { Toolbar } from "@mui/material";

const styles = theme => ({
    tableRow: {
     '&&:hover': {
        background: "blue",
      },
     },
  });

function ViewPDoctors(props){

    let navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate(-1)
    }

    return(
        <div style={{ height: '100vh', backgroundSize: '100%',backgroundRepeat:"no-repeat", backgroundImage: `url(${BackGround})` }}>
            <Toolbar/>
            <div align="center" >
            <h2 align="center">Doctor Details</h2>
            <NavLink to="/addDoctor" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Add Doctor</Button></NavLink>
            <TableContainer  component={Paper} sx={{ px:25 }} style={{ height: '100vh', backgroundRepeat:"no-repeat", backgroundSize: '100%', backgroundImage: `url(${BackGround})` }} >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow sx={{backgroundColor: "#3989D5"}}>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Specialization</TableCell>
                            <TableCell align="left">Availability</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.doctor.map((doctor)=> (
                        <TableRow

                        hover
                        className={props.tableRow}
                        key={doctor.doctorId}
                        sx={{ backgroundColor: "#B1CFEC",'&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="left">{doctor.doctorName}</TableCell>
                        <TableCell align="left">{doctor.spec}</TableCell>
                        <TableCell align="left">{doctor.doctorAvailable?<h7>Available</h7>:<h7>Unavailable</h7>}</TableCell>
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

export default ViewPDoctors;