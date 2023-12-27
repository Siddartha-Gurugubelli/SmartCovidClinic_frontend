import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import BackGround from '../images/adminBg.jpg';
import { Toolbar } from "@mui/material";


const styles = theme => ({
    tableRow: {
     '&&:hover': {
        background: "blue",
      },
     },
  });

function ReporterTable(props){

    let navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate(-1)
    }

    return(
        <div align="center" style={{  height: '100vh', backgroundSize: '100%', backgroundImage: `url(${BackGround})` }}>
            <Toolbar/>
            <h2 align="center">Reporter Details</h2>
            <NavLink to="/addReporter" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Add Reporter</Button></NavLink>
            <TableContainer  component={Paper} sx={{ px:22 }} style={{ height: '77vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }} >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow sx={{backgroundColor: "#3989D5",}}>
                            <TableCell>Reporter Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Contact</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.reporter.map((reporter)=> (
                        <TableRow
                        key={reporter.reporterId}
                        hover
                        className={props.tableRow}
                        sx={{ backgroundColor: "#B1CFEC",'&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{reporter.reporterId}</TableCell>
                        <TableCell align="right">{reporter.reporterName}</TableCell>
                        <TableCell align="right">{reporter.reporterContact}</TableCell>
                        <TableCell align="right">{reporter.login.loginEmail}</TableCell>
                        <TableCell align="right">
                        {/* <Link to={`/admin/update/${reporter.reporterId}`}>
                                <UpdateIcon/>
                            </Link> */}
                            <Button onClick={() => props.handleDelete(reporter.reporterId)} variant="text">
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
    )
}

export default ReporterTable;