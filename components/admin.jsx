import React, { Component } from "react";
import axios from "axios";
import AdminTable from "./adminTable";
import Toolbar from '@mui/material/Toolbar';

class Admin extends Component{
    state = {
        admin:[],
    };

    componentDidMount() {
        axios.get("http://localhost:8080/admin/getAllAdmin")
             .then((response) => {
                console.log(response);
                this.setState({admin:response.data});
             })
             .catch((error) => console.log(error));
    }

    handleDelete = (adminId) => {
        axios.delete(`http://localhost:8080/admin/delete/${adminId}`)
             .then((res) => {
                console.log(res);
                const admin=this.state.admin.filter((admin) => admin.adminId!==adminId);
                this.setState({admin:admin});
                alert("Administrator with adminId "+ adminId +" deleted successfully!");
             })
             .catch((err) => console.log(err));
    };

    render() {
        return(
            <div>
                
                    <AdminTable admin={this.state.admin}
                                handleDelete={this.handleDelete}/>
            </div>
        );
    }
}

export default Admin;