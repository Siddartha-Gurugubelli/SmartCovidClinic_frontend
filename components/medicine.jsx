import React, { Component } from "react";
import axios from "axios";
import Toolbar from '@mui/material/Toolbar';
import MedicineTable from "./medicineTable";

class Medicine extends Component{
   
    state = {
        medicine:[],
    };

    componentDidMount() {
        axios.get("http://localhost:8080/medicine/getAllMed")
             .then((response) => {
                console.log(response);
                this.setState({medicine:response.data});
             })
             .catch((error) => console.log(error));
    }

    handleDelete = (medicineId) => {
        axios.delete(`http://localhost:8080/medicine/delete/${medicineId}`)
             .then((res) => {
                console.log(res);
                const medicine=this.state.medicine.filter((medicine) => medicine.medicineId!==medicineId);
                this.setState({medicine:medicine});
                alert("Medicine with medicineId "+ medicineId +" deleted successfully!");
                
             })
             .catch((err) => console.log(err));
    };

    render() {
        return(
            <div>
                
                    <MedicineTable medicine={this.state.medicine}
                                handleDelete={this.handleDelete}/>
            </div>
        );
    }
}

export default Medicine;