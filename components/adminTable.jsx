import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { Toolbar } from "@mui/material";
import BackGround from '../images/adminBg.jpg';
import { useNavigate } from "react-router-dom";

const styles = theme => ({
    tableRow: {
     '&&:hover': {
        background: "blue",
      },
     },
  });


function AdminTable(props){

    let navigate = useNavigate();
    const goToPreviousPath = () => {
        navigate(-1)
    }
    return(
        <div align="center" style={{ height: '100vh', backgroundSize: '100%', backgroundImage: `url(${BackGround})` }}>
            <Toolbar/>
            
            <h2 align="center">Admin Details</h2>
            <NavLink to="/addAdmin" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Add Admin</Button></NavLink>
            <TableContainer  component={Paper} sx={{ px:22 }} style={{ height: '77vh', backgroundSize: '50%', backgroundImage: `url(${BackGround})` }} >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
                    <TableHead>
                        <TableRow sx={{backgroundColor: "#3989D5"}}>
                            <TableCell>Admin Id</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Contact</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.admin.map((admin)=> (
                        <TableRow
                        key={admin.adminId}
                        hover
                        className={props.tableRow}
                        sx={{ backgroundColor: "#B1CFEC",'&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{admin.adminId}</TableCell>
                        <TableCell align="left">{admin.adminName}</TableCell>
                        <TableCell align="left">{admin.contact}</TableCell>
                        <TableCell align="left">{admin.login.loginEmail}</TableCell>
                        <TableCell align="left">
                        <Link to={`/admin/update/${admin.adminId}`}>
                                <UpdateIcon style={{ color:'Green', textDecoration: 'none' }} />
                        </Link>
                        <Button style={{ color:'Red', textDecoration: 'none' }} onClick={() => props.handleDelete(admin.adminId)} variant="text">
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

export default AdminTable;