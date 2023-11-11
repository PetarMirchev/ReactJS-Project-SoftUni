import React from "react";
import Google from "./google.png";
import Facebook from "./facebook.png";
import Github from "./github.png";
import './login.css'; 


import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import axios from "axios";



const Login = () => {
  //call google login dialog box
  const google = () => {
    // window.open("http://localhost:5000/auth/google", "_self");
  };
  const github = () => {
    // window.open("http://localhost:5000/auth/github", "_self");
  };
  const facebook = () => {
    // window.open("http://localhost:5000/auth/facebook", "_self");
  };

  //*********************************************************************************** */
  //login user by 'acc' & 'pass' logic:

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  
  //navigate hock to navigate user to Home after successes login 
  const navigate = useNavigate()

  //btn function 
  const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };


    //init login process
    const handleClick = async (e) => {
        //to stop auto refresh page --> e.preventDefault()
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("http://localhost:8800/api/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose your Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="google" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="facebook" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="github" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input className="input-fields" type="text" placeholder="username" id="username" onChange={handleChange}/>
          <input className="input-fields" type="password" placeholder="password" id="password" onChange={handleChange}/>
          <button className="submitBTN" disabled={loading} onClick={handleClick}>Login</button>
          
          {/* after logon operation is error, whe show error message whit next line */}
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Login;