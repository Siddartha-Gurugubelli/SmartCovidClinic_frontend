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
import DeleteIcon from '@mui/icons-material/Delete';
import { Toolbar } from "@mui/material";
import BackGround from '../images/adminBg.jpg';


const styles = theme => ({
    tableRow: {
     '&&:hover': {
        background: "blue",
      },
     },
  });


function MedicineTable(props){

    let navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate(-1)
    }

    return(
        <div align="center" style={{ height: '100vh', backgroundSize: '100%', backgroundImage: `url(${BackGround})` }}>
            <Toolbar/>
            <h2 align="center">Medicine Details</h2> 
            <NavLink to="/addMedicine" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Add Medicine</Button></NavLink>
            <TableContainer  component={Paper} sx={{ px:30 }} style={{ height: '77vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }} >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow sx={{backgroundColor: "#3989D5"}}>
                            <TableCell>Medicine Id</TableCell>
                            <TableCell align="left">Ailment</TableCell>
                            <TableCell align="left">Medicine</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.medicine.map((medicine)=> (
                        <TableRow
                        key={medicine.medicineId}
                        hover
                        className={props.tableRow}
                        sx={{ backgroundColor: "#B1CFEC",'&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{medicine.id}</TableCell>
                        <TableCell align="left">{medicine.ailment}</TableCell>
                        <TableCell align="left">{medicine.medicine}</TableCell>
                        <TableCell align="left">
                            <Button onClick={() => props.handleDelete(medicine.id)} variant="text">
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

export default MedicineTable;