import React, { Component } from "react";
import axios from "axios";
import DoctorTable from "./doctorTable";
import { Toolbar } from "@mui/material";
import ViewPDoctors from "./viewPDoctors";

class PDoctor extends Component{
    state = {
        doctor:[],
    };

    componentDidMount() {
        axios.get("http://localhost:8080/admin/getAllDoctors")
             .then((response) => {
                console.log(response);
                this.setState({doctor:response.data});
             })
             .catch((error) => console.log(error));
    }

    handleDelete = (docId) => {
        axios.delete(`http://localhost:8080/admin/deleteDoctor/${docId}`)
             .then((res) => {
                console.log(res);
                const doctor=this.state.doctor.filter((doctor) => doctor.docId!==docId);
                this.setState({doctor:doctor});
                alert("Doctor with DoctorId "+ docId +" deleted successfully!");
             })
             .catch((err) => console.log(err));
    };

    render() {
        return(
            <div>
                
                    <ViewPDoctors doctor={this.state.doctor}
                                handleDelete={this.handleDelete}/>
            </div>
        );
    }
}

export default PDoctor;