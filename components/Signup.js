import React, { useState } from "react";
import { signup } from "../services/patient-service";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Joi from "joi-browser";
import { Toolbar } from "@mui/material";

const Signup = () => {
  let navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    contact: 0,
    email: "",
    password: "",
    membership: false,
  });

  const [errors, setErrors] = useState({});
  // const [errRes, setErrRes] = useState("");

  // const [error, setError] = useState({
  //   errors: {},
  //   isError: false,
  // });

  //Define schema to validate email, name, contact, password and membership
  const schema = {
    name: Joi.string().alphanum().min(3).max(30).required(),
    contact: Joi.number().positive(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(8).max(30).required(),
    membership: Joi.boolean().required(),
  };

  // method to validate form data as per the schema
  const validate = () => {
    const errors = {}; //object type local variable
    const result = Joi.validate(data, schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  //handle change
  const handleChange = (event, property) => {
    //dynamic setting the value
    setData({ ...data, [property]: event.target.value });
  };

  //resetting the form
  const resetData = () => {
    setData({
      name: "",
      contact: 0,
      email: "",
      password: "",
      membership: false,
    });
  };

  //submit the form
  const submitForm = (event) => {
    event.preventDefault();

    // Call validate function
    // validate login details with schema
    setErrors(validate());

    if (errors) return;

    console.log(data);

    const newData = {
      patientName: data.name,
      contact: data.contact,
      login: {
        loginEmail: data.email,
        loginPassword: data.password,
      },
      memberShip: data.membership,
    };

    //call server api for sending the data
    signup(newData)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("Patient is successfully registered ! !");
        setData({
          name: "",
          contact: 0,
          email: "",
          password: "",
          membership: false,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
        toast.error("Error with details ! !");
      });
  };

  return (<>
    <Toolbar/>
      <Container>
        <Row className="mt-4">
          {/*JSON.stringify(data)*/}

          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" outline>
              <CardHeader className="text-center">
                <h3>Register for Patient</h3>
              </CardHeader>

              <CardBody>
                {/* creating form */}

                <Form onSubmit={submitForm}>
                  {/* Name field */}
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                    />
                    {errors && (
                      <small className="text-danger">{errors.name}</small>
                    )}
                  </FormGroup>

                  {/* Contact field */}
                  <FormGroup>
                    <Label for="contact">Contact</Label>
                    <Input
                      id="contact"
                      type="number"
                      placeholder="Enter your contact"
                      onChange={(e) => handleChange(e, "contact")}
                      value={data.contact}
                    />
                    {errors && (
                      <small className="text-danger">{errors.contact}</small>
                    )}
                  </FormGroup>

                  {/* Email field */}
                  <FormGroup>
                    <Label for="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                    />
                    {errors && (
                      <small className="text-danger">{errors.email}</small>
                    )}
                  </FormGroup>

                  {/* Password field */}
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                    />
                    {errors && (
                      <small className="text-danger">{errors.password}</small>
                    )}
                  </FormGroup>

                  {/* membership field */}
                  <FormGroup>
                    <Label for="membership">Membership</Label>
                    <Input
                      id="membership"
                      type="select"
                      onChange={(e) => handleChange(e, "membership")}
                      value={data.membership}
                      required
                    >
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </Input>
                    {errors && (
                      <small className="text-danger">{errors.membership}</small>
                    )}
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="success">Register</Button>
                    <Button
                      onClick={resetData}
                      color="danger"
                      type="reset"
                      className="ms-2"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </>
  );
};

export default Signup;
