import React, { Component } from "react";
import axios from "axios";
import DoctorTable from "./doctorTable";
import { Toolbar } from "@mui/material";
import DoctorStatusTable from "./doctorStatusTable";

class DoctorStatus extends Component{
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

   

    render() {
        return(
            <div>
                
                    <DoctorStatusTable doctor={this.state.doctor}
                                />
            </div>
        );
    }
}

export default DoctorStatus;