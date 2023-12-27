import '../css/loginCss.css';
import profile from  "../images/usericon.jpeg";
import email from "../images/mail.jpg";
import pwd from "../images/pwd.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import { loginAction } from '../actions/loginActions';

function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const lgn = useSelector((state) => state.login);


    const[login, setLogin]=useState({
        email:"",
        password:"",
        role:"",
    });

    const[loginErrors, setLoginErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);

    const handleChange = (event) =>{
        console.log(event.target.name);
        console.log(event.target.value);

        const newLogin={ ...login };

        newLogin[event.target.name]=event.target.value;

        setLogin(newLogin);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        setLoginErrors(validate(login));
        setIsSubmit(true);

        console.log("handleSubmit");

        const newLogin={
            loginEmail:login.email,
            loginPassword:login.password,
            role:login.role,
        };

        dispatch(loginAction(newLogin));


        console.log(login);

        setTimeout(()=> {
            if (lgn.login.loggedIn) {
                alert("User Loggedin Successfully");
                if(login.role==="Admin"){
                navigate("/adminDashboard");
                }
                if(login.role==="Patient"){
                    navigate("/patient");
                }
                if(login.role==="Reporter"){
                    navigate("/reporterDashboard")
                }}
             })
         };

         useEffect(() =>{
            console.log(loginErrors);
            if(Object.keys(loginErrors).length===0 && isSubmit){
                console.log(login);
            }
        },[loginErrors])
    

         const validate = (values) =>{
            const errors ={}
            const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            
            
            if(!values.email){
                errors.email="Email is Required!";
            }else if(!regex.test(values.email)){
                errors.email="Please enter a Valid Email!";
            }
            if(!values.password){
                errors.password="Password is Required!";
            }
            return errors;
        };
        
    return(

        <div className="main">
            <form onSubmit={handleSubmit}>
            <div className="sub-main">
                
                <div>
                <div className="imgs">
                    <div className="container-image">
                        <img src={profile} alt="profile" className="profile"/>
                        
                    </div>
                </div>
                <div>
                    <h1>User Login</h1>
                    <div>
                        <img src={email} alt="email" className="email"/>
                        <input type= "text" value={login.email}
                        onChange={handleChange} placeholder="Email Id" name="email" className="name"/>
                         <h4 style={{color: "red"}}>{loginErrors.email}</h4>

                    </div>
                    <div className="second-input">
                        <img src={pwd} alt="pwd" className="email"/>
                        <input type= "password" value={login.password}
                        onChange={handleChange}placeholder="Password" name="password" className="name"/>
                         <h4 style={{color: "red"}}>{loginErrors.password}</h4>
                    </div>
                    <div className="dropdown">
                    <select value={login.role}
                        onChange={handleChange} name="role">
                        <option selected>Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Reporter">Reporter</option>
                        <option value="Patient">Patient</option>
                    </select>
                    </div>
                    <div className="login-button">
                    <button type="submit" className='button'>Submit</button>
                    </div>
                    <p className="link">
                        <NavLink to="/forgotPassword" >
                        <h4>Forgot password ?</h4> 
                        </NavLink>
                        
                    </p>
                </div>
            </div>
        </div>
        </form>
        </div>
    )

}

export default Login;