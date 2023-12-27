import React, { Component } from "react";
import axios from "axios";
import ReporterTable from "./reporterTable";
import Toolbar from '@mui/material/Toolbar';

class Reporter extends Component{
    state = {
        reporter:[],
    };

    componentDidMount() {
        axios.get("http://localhost:8080/reporter/getAllReporters")
             .then((response) => {
                console.log(response);
                this.setState({reporter:response.data});
             })
             .catch((error) => console.log(error));
    }

    handleDelete = (reporterId) => {
        axios.delete(`http://localhost:8080/reporter/deleteReporter/${reporterId}`)
             .then((res) => {
                console.log(res);
                const reporter=this.state.reporter.filter((reporter) => reporter.reporterId!==reporterId);
                this.setState({reporter:reporter});
                alert("Reporter with reporterId "+ reporterId +" deleted successfully!");
             })
             .catch((err) => console.log(err));
    };

    render() {
        return(
            <div>
                
                    <ReporterTable reporter={this.state.reporter}
                                handleDelete={this.handleDelete}/>
            </div>
        );
    }
}

export default Reporter;