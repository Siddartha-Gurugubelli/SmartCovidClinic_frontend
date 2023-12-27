import React, { Component } from "react";
import axios from "axios";
import Toolbar from '@mui/material/Toolbar';
import PatientTable from "./patientTable";

class AdminPatient extends Component{
    state = {
        patient:[],
    };

    componentDidMount() {
        axios.get("http://localhost:8080/patient/getAll")
             .then((response) => {
                console.log(response);
                this.setState({patient:response.data});
             })
             .catch((error) => console.log(error));
    }

    handleDelete = (patientId) => {
        axios.delete(`http://localhost:8080/patient/delete/${patientId}`)
             .then((res) => {
                console.log(res);
                const patient=this.state.patient.filter((patient) => patient.patientId!==patientId);
                this.setState({patient:patient});
                alert("Patient with patientId "+ patientId +" deleted successfully!");
             })
             .catch((err) => console.log(err));
    };

    render() {
        return(
            <div>
                
                    <PatientTable patient={this.state.patient}
                                handleDelete={this.handleDelete}/>
            </div>
        );
    }
}

export default AdminPatient;